module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'erb',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      webpack: {
        config: require.resolve('./.erb/configs/webpack.config.eslint.js'),
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js'],
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    '@typescript-eslint/indent': 'off',
    'spaced-comment': ['error', 'always', { markers: ['/ <reference'] }],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/default-props-match-prop-types': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          every: ['nesting', 'id'],
        },
      },
    ],
  },
};
