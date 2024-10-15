import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginTailwindcss from 'eslint-plugin-tailwindcss';
import pluginVue from 'eslint-plugin-vue';
import pluginCypress from 'eslint-plugin-cypress/flat';
import pluginJest from 'eslint-plugin-jest';

import vueTsEslintConfig from '@vue/eslint-config-typescript';
import prettierConfig from '@vue/eslint-config-prettier';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  pluginPrettierRecommended,
  ...pluginTailwindcss.configs['flat/recommended'],
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  {
    files: ['spec/javascript/**'],
    ...pluginJest.configs['flat/recommended'],
    rules: {
      ...pluginJest.configs['flat/recommended'].rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
  {
    files: ['spec/cypress/**'],
    ...pluginCypress.configs.recommended,
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-var-requires': 'off',
      'vue/no-v-html': 'off',
      'vue/script-setup-uses-vars': 'error',
    },
  },
  {
    ignores: [
      '.ruby-lsp/',
      '.yarn/',
      'config/',
      'coverage/',
      'db/',
      'log/',
      'node_modules/',
      'public/',
      'tmp/',
      'vendor/',
    ],
  },
  prettierConfig,
];