# Turborepo Template with Next JS and Express JS

This repository is a monorepo powered by [Turborepo](https://turbo.build/), a high-performance build system for JavaScript and TypeScript codebases.

## Project Structure

The repository follows a monorepo structure with the following directories:

```bash
├── apps/             # Application projects (e.g., web, api)
├── node_modules/     # Dependencies
├── turbo.json        # Turborepo configuration
└── package.json      # Root package.json with common dependencies and scripts
```

- apps/: Contains the applications for the project. Each application resides in its own folder.

## Getting Started

Follow these steps to set up the project on your local machine:

### 1. Clone the repository:

```bash
git clone https://github.com/Mustofawho0/turborepo-next-express.git
cd your-repo-name
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Run the development server:

```bash
npm run dev
```

This command will run the development servers for all apps located inside the **apps** folder.

## Available Commands

Here are some useful commands you can run in the project:

### Build all projects:

```bash
npm run build
```

This command will build all **apps** and packages within the monorepo.

### Start the development server:

```bash
npm run dev
```

This will start the development servers for all apps in the **apps** directory.

### Lint all projects:

```bash
npm run lint
```

Runs the linter for all projects and packages.

## Turborepo Features

Turborepo optimizes your build process with features like:

- Caching: Caches build outputs to avoid redundant work and improve performance.
- Parallel Execution: Executes tasks in parallel across apps and packages.
- Workspaces Support: Works seamlessly with npm, yarn, or pnpm workspaces for managing dependencies across the monorepo.

## Documentation

For more detailed information on how to use Turborepo, visit the [official Turborepo documentation](https://turbo.build/repo/docs).
