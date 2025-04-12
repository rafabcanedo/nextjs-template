#!/bin/bash

# Instalall Dependences
npm install --save-dev eslint prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Configuration file
cat > .eslintrc.js <<EOL
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'next/core-web-vitals'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
EOL

cat > .prettierrc <<EOL
{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
EOL

cat > .eslintignore <<EOL
node_modules
.next
build
dist
coverage
EOL

cat > .prettierignore <<EOL
node_modules
.next
build
dist
coverage
EOL

echo "Configuração do ESLint e Prettier concluída!"