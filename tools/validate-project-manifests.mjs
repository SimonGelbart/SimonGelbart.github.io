import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const projectsPath = path.join(root, 'src/data/projects.ts');
const manifestsDir = path.join(root, 'src/data/project-manifests');

const linkLabels = {
  repoUrl: /^Repo\b/i,
  docsUrl: /^Docs$/i,
  adrUrl: /^ADRs?$/i,
  roadmapUrl: /^Roadmap$/i,
};

function extractProjects(source) {
  const projectBlocks = [...source.matchAll(/\{\s*name:\s*'([^']+)'[\s\S]*?featured:\s*(?:true|false),?\s*\}/g)];
  return projectBlocks.map((match) => {
    const block = match[0];
    const project = {
      name: readStringProperty(block, 'name'),
      slug: readStringProperty(block, 'slug'),
      links: extractLinks(block),
    };

    for (const [field, labelPattern] of Object.entries(linkLabels)) {
      project[field] = project.links.find((link) => labelPattern.test(link.label))?.href;
    }

    return project;
  });
}

function readStringProperty(block, property) {
  return block.match(new RegExp(`${property}:\\s*'([^']+)'`))?.[1];
}

function extractLinks(block) {
  const linksBlock = block.match(/links:\s*\[([\s\S]*?)\],\s*featured:/)?.[1] ?? '';
  return [...linksBlock.matchAll(/\{\s*label:\s*'([^']+)'\s*,\s*href:\s*'([^']+)'/g)].map((match) => ({
    label: match[1],
    href: match[2],
  }));
}

function manifestFacts(manifest) {
  return {
    slug: manifest.slug,
    name: manifest.name,
    repoUrl: manifest.repositoryUrl ?? manifest.repo,
    docsUrl: manifest.docsUrl ?? manifest.docs,
    adrUrl: manifest.adrUrl ?? manifest.adr,
    roadmapUrl: manifest.roadmapUrl ?? manifest.roadmap,
  };
}

function comparableFields(siteProject, manifest) {
  return Object.entries(manifestFacts(manifest))
    .filter(([, manifestValue]) => manifestValue !== undefined && manifestValue !== null && manifestValue !== '')
    .filter(([field]) => siteProject[field] !== undefined && siteProject[field] !== null && siteProject[field] !== '');
}

const projectsSource = await readFile(projectsPath, 'utf8');
const siteProjects = new Map(extractProjects(projectsSource).map((project) => [project.slug, project]));
const manifestFiles = (await readdir(manifestsDir)).filter((file) => file.endsWith('.json')).sort();
const failures = [];
const successes = [];

for (const file of manifestFiles) {
  const manifest = JSON.parse(await readFile(path.join(manifestsDir, file), 'utf8'));
  const facts = manifestFacts(manifest);
  const siteProject = siteProjects.get(facts.slug);

  if (!siteProject) {
    failures.push({ field: `${facts.slug ?? file}.slug`, site: '(missing project)', manifest: facts.slug ?? '(missing manifest slug)' });
    continue;
  }

  let projectFailureCount = 0;
  for (const [field, manifestValue] of comparableFields(siteProject, manifest)) {
    const siteValue = siteProject[field];
    if (siteValue !== manifestValue) {
      projectFailureCount += 1;
      failures.push({ field: `${facts.slug}.${field}`, site: siteValue, manifest: manifestValue });
    }
  }

  if (projectFailureCount === 0) {
    successes.push(`- ${facts.slug}: stable links match vendored manifest`);
  }
}

if (failures.length > 0) {
  console.error('Project manifest validation failed:');
  for (const failure of failures) {
    console.error(`- ${failure.field}`);
    console.error(`  main site: ${failure.site}`);
    console.error(`  manifest:  ${failure.manifest}`);
  }
  process.exit(1);
}

console.log('Project manifest validation passed:');
for (const success of successes) {
  console.log(success);
}
