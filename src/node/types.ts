export type DependencyResults = {
  package: string;
  dependencyCount: number;
  fileCount: number;
  unpackedSize: number;
  duplicate: boolean;
  error: boolean;
  unmet: boolean;
  author: string;
  deprecated: string;
  description: string;
  license: string;
  maintainers: string;
  ownStats: {
    dependencyCount: number;
    fileCount: number;
    unpackedSize: number;
  };
  children: DependencyResults[];
}

export type NpmRegistrySearchResults = {
  objects: {
    downloads: {
      monthly: number;
      weekly: number;
    };
    dependents: string;
    updated: string;
    searchScore: number;
    package: {
      name: string;
      keywords: string[];
      version: string;
      description: string;
      sanitized_name: string;
      publisher: {
        email: string;
        username: string;
      };
      maintainers: {
        email: string;
        username: string;
      }[];
      license: string;
      date: string;
      links: {
        homepage: string;
        repository: string;
        bugs: string;
        npm: string;
      };
    };
    score: {
      final: number;
      detail: {
        popularity: number;
        quality: number;
        maintenance: number;
      };
    };
    flags: {
      insecure: number;
    };
  }[];
  total: number;
  time: string;
};
