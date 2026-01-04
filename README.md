[![CI](https://github.com/samdouble/package-reputation-action/actions/workflows/checks.yml/badge.svg)](https://github.com/samdouble/package-reputation-action/actions/workflows/checks.yml)
[![Coverage Status](https://coveralls.io/repos/samdouble/package-reputation-action/badge.svg?branch=master&service=github)](https://coveralls.io/github/samdouble/package-reputation-action?branch=master)

[![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white)](https://github.com/features/actions)

# package-reputation-action

## Usage

### Inputs

| Name                      | Description                                | Default | Required |
|---------------------------|--------------------------------------------|---------|----------|
| language                  | Language used in the project (one of node) |         | ✅       |
| include_dev_dependencies  | Whether to include dev dependencies        | false   |     |
| include_peer_dependencies | Whether to include peer dependencies       | false   |     |

#### `language`

The language used in the project. Currently only `node` is supported.

#### `include_dev_dependencies`

Whether to include dev dependencies.

#### `include_peer_dependencies`

Whether to include peer dependencies.

### Outputs

TODO
