module.exports = {
  extends: ['universe', 'universe/shared/typescript-analysis'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
};
