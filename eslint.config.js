import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(['jest.config.ts', 'dist/*', 'node_modules/*']),
  tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.cts', '**.*.mts'],
    rules: {
      'prefer-const': 'error',
			semi: 'error',
		},
	},
]);
