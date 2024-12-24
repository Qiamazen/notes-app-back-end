//import daStyle from 'eslint-config-dicodingacademy';
import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  //daStyle,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      parserOptions: {
        sourceType: 'commonjs',
        ecmaVersion: 9,
      },
    },
  },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
];
