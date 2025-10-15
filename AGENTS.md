# Repository Guidelines

## Project Structure & Module Organization
Astro source files live in `src`. Routes are declared in `src/pages`, shared views in `src/layouts`, and UI building blocks in `src/components`. Content collections (`blog`, `products`) live under `src/content` as Markdown or MDX files, giving typed metadata through `astro:content`. Static assets (logos, product imagery, testimonials) sit in `public`, while `dist/` is generated at build time—never edit it directly. Configuration is centralized in `astro.config.mjs`, `tailwind.config.mjs`, and `tsconfig.json`, so review those before introducing new frameworks or paths.

## Build, Test, and Development Commands
Run `npm install` once to sync dependencies. Use `npm run dev` for the local development server with hot module reload. `npm run build` creates the production-ready `dist/` output and surfaces integration errors. `npm run preview` serves the built site locally for QA. When you need direct Astro CLI tools (e.g., scaffolding content collections), use `npm run astro -- <command>`.

## Coding Style & Naming Conventions
Write Astro components and TypeScript modules using two-space indentation and ES module syntax. Keep component filenames in `PascalCase.astro`, utility modules in `camelCase.ts`, and content entries in kebab-case (for clean URLs). Co-locate Tailwind classes with semantic HTML and prefer shared patterns from existing components; avoid inline styles unless Tailwind lacks the utility. Update shared types or constants instead of duplicating literals.

## Testing Guidelines
This project does not ship with an automated test runner yet. Validate every change by running `npm run build`; the build fails when content schemas or Astro components break. For user-facing updates, follow with `npm run preview` and smoke-test key routes (`/`, `/products`, `/blog`) across mobile and desktop breakpoints.

## Commit & Pull Request Guidelines
Existing history shows short, imperative commit messages (“Add hero layout”). Follow that pattern and group related changes together. Reference an issue or task ID in the body when applicable, and mention any content entries you touched. Pull requests should outline the intent, list manual test steps, and include before/after screenshots or recordings for visual tweaks. Flag follow-up work in `todos.md` if you cannot address it immediately.

## Content & Asset Tips
Use the existing frontmatter fields in `src/content` and add new ones by updating the corresponding collection schema. Place new imagery under `public/products` or `public/testemonial` and optimize file size before committing. When adding links, prefer relative paths inside the domain and set `rel="noopener noreferrer"` on external anchors for consistency.
