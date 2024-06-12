## Overview

This project is a web application built using React and TypeScript. The application features various components and services structured to facilitate the management and import of cryptocurrency wallets.

## Project Structure

The project is organized into several directories and files, each serving a specific purpose in the application. Below is a detailed overview of the project structure:




### Directories and Files

#### `components/`

This directory contains the React components that make up the user interface of the application.

- **Header.tsx**: Component for the application's header.
- **ImportWallet.tsx**: Component for importing wallets, including a form to enter wallet details and handle submission.
- **Sidebar.tsx**: Component for the sidebar navigation.
- **TableComponent.tsx**: Component to display data in a tabular format.
- **Transactions.tsx**: Component for displaying transaction-related information.
- **Wallets.tsx**: Component to manage and display wallet information.

#### `Models/`

This directory contains the TypeScript interfaces and styled components used across the application.

- **ApiInterfaces.tsx**: Defines the interfaces for API responses and other data structures.
- **StyledComponents.tsx**: Contains styled-components used for consistent styling across the application.

#### `Service/`

This directory contains the service files for handling API interactions.

- **blockCypherApi.ts**: Service file that interacts with the BlockCypher API for cryptocurrency wallet operations.











# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list