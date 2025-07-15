import init from '@flypeng/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...init(),
    {
        ignores: ['**/dist'],
    },
];
