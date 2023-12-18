import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import eslintJsoncParser from 'jsonc-eslint-parser';

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
const compat = new FlatCompat({
  baseDirectory: dirName,
});

const jsonConfig = [
  ...compat.extends('plugin:jsonc/recommended-with-jsonc'),
  {
    languageOptions: {
      parser: eslintJsoncParser,
    },
  },
];

const markdownConfig = [
  ...compat.extends('plugin:markdown/recommended'),
  {
    processor: 'markdown/markdown',
  },
];

export default () => ({
  jsonConfig,
  markdownConfig,
});
