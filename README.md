# package-reputation-action

[![CI](https://github.com/samdouble/package-reputation-action/actions/workflows/checks.yml/badge.svg)](https://github.com/samdouble/package-reputation-action/actions/workflows/checks.yml)
[![Coverage Status](https://coveralls.io/repos/samdouble/package-reputation-action/badge.svg?branch=master&service=github)](https://coveralls.io/github/samdouble/package-reputation-action?branch=master)



## How to Use

### Inputs

| Name                      | Description                                | Default | Required |
|---------------------------|--------------------------------------------|---------|----------|
| language                  | Language used in the project (one of node) |         | true     |
| include_dev_dependencies  | Whether to include dev dependencies        | false   | false    |
| include_peer_dependencies | Whether to include peer dependencies       | false   | false    |

#### `language`

The language used in the project. Currently only `node` is supported.

#### `include_dev_dependencies`

Whether to include dev dependencies.

#### `include_peer_dependencies`

Whether to include peer dependencies.

### Outputs

TODO
