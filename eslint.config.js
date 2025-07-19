import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['jest.config.ts', 'dist/*', 'node_modules/*']),
  {
    files: ['**/*.ts', '**/*.cts', '**.*.mts'],
    rules: {
      'prefer-const': 'error',
			semi: 'error',
		},
	},
]);
