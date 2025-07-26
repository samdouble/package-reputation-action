import * as core from '@actions/core';
import { getNpmRegistryResults } from './node/api';
import { DependencyResults } from './node/types';
import { getDependencies } from './node/utils';
import { Language } from './types';

export async function main() {
  core.info(`Running package reputation action`);

  const language = core.getInput('language');
  core.info(`Using language: "${language}"`);

  if (language === Language.NODE) {
    const includeDevDependencies = core.getInput('include_dev_dependencies') === 'true';
    const includePeerDependencies = core.getInput('include_peer_dependencies') === 'true';
    const dependenciesResults: DependencyResults = await getDependencies(
      includeDevDependencies,
      includePeerDependencies,
    );
    core.info(`Found ${dependenciesResults.dependencyCount} dependencies`);
    core.info(JSON.stringify(dependenciesResults, null, 2));

    for (const packageName of dependenciesResults.package) {
      core.info(`Examining package: ${packageName}`);
      const npmRegistrySearchResults = await getNpmRegistryResults(packageName);
      if (npmRegistrySearchResults.objects.length > 0) {
        core.info(JSON.stringify(npmRegistrySearchResults, null, 2));
      } else {
        core.error(`No results found for package: ${packageName}`);
      }
    }

    // https://docs.pypi.org/api/json/
    // https://github.com/Developmint/npm-stats-api/blob/master/src/NpmStats.php
    // https://github.com/npm/registry/blob/main/docs/download-counts.md
  } else {
    core.error(`Unsupported language: "${language}"`);
    core.setFailed('Unsupported language');
  }
}
