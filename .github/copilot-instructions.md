# Copilot Instructions — heroes-angular

## Project Type

Angular 11 SPA with NgRx/data state management, json-server mock backend, and Cypress e2e tests. TypeScript throughout.

## Code Conventions

### TypeScript

- Use strict typing — avoid `any` where possible
- Interfaces for domain models live in `src/app/core/model/`
- Entity IDs are **strings**, not numbers (e.g., `"HeroAslaug"`)
- Use Angular's `@Input()` / `@Output()` decorators for component communication

### Angular Components

- Follow container/presentational pattern
  - **Container components** (`heroes.component.ts`, `villains.component.ts`) manage state via entity services
  - **Presentational components** receive data via `@Input()` and emit events via `@Output()`
- Use inline templates for simple components
- SCSS for styles (configured in `angular.json`)
- Component prefix is `app` (see `angular.json` → `prefix`)

### Feature Modules

Each feature follows this structure:

```
src/app/<feature>/
├── <feature>.module.ts            # NgModule declaration
├── <feature>.component.ts         # Container (smart) component
├── <feature>.component.html       # Container template
├── <feature>-list.component.ts    # List presentational component
├── <feature>-list.component.html  # List template
├── <feature>-detail.component.ts  # Detail presentational component
├── <feature>-detail.component.html # Detail template
└── <feature>.service.ts           # NgRx/data entity service
```

### State Management

- Entity services extend `EntityCollectionServiceBase` from `@ngrx/data`
- Entity metadata is registered in `src/app/store/entity-metadata.ts`
- No manual actions/reducers — NgRx/data handles CRUD automatically

### Styling

- Global styles: `src/styles.scss`
- CSS framework: Bulma (via `node_modules/bulma/`)
- Icons: Font Awesome 4.x

## Build Commands

```bash
npm install            # Install dependencies
npm run quick          # Dev server (Angular + json-server)
npm run build          # Production build (ng build --prod)
npm test               # Unit tests (Karma + Jasmine)
npm run lint           # Lint (TSLint + Codelyzer)
npm run e2e            # E2E tests (starts app + Cypress)
```

## Testing Practices

### Unit Tests

- Use Angular TestBed for component tests
- Config: `src/karma.conf.js`
- Run: `npm test`

### E2E Tests (Cypress)

- Specs: `cypress/integration/`
- Reset data between tests with `cy.request('POST', '/api/reset', data)`
- Cypress config: `cypress.json`

## API Conventions

- Dev proxy: Angular dev server forwards `/api/*` to json-server on port 7627
- Route rewrites: `routes.json` maps `/api/*` → `/$1`
- Endpoints: `/api/heroes`, `/api/villains`, `/api/reset`

## File Naming

- Angular CLI conventions: `kebab-case` for file names
- Components: `<name>.component.ts`
- Services: `<name>.service.ts`
- Modules: `<name>.module.ts`
- Models: `<name>.ts` (in `core/model/`)

## Maintenance Matrix

| When this changes... | Also update... |
|---|---|
| `src/app/core/model/*.ts` (interfaces) | Services, components, and Cypress fixtures using those models |
| `src/app/store/entity-metadata.ts` | Corresponding entity service if adding/removing entities |
| `angular.json` build config | `Dockerfile`, CI workflow, deployment scripts |
| `package.json` scripts | `AGENTS.md` (Build & Run section), CI workflow |
| `db.json` (seed data) | `cypress/integration/` specs that reference seed data |
| `routes.json` (API routes) | `proxy.conf.json`, any hardcoded API paths in services |
| `proxy.conf.json` | Service base URLs, `routes.json` |
| New feature module added | `src/app/router.ts`, `src/app/core/model/`, `src/app/store/entity-metadata.ts` |
| Cypress tests added/changed | Verify json-server is configured for the tested endpoints |
| Environment files changed | Both `environment.ts` and `environment.prod.ts` should stay in sync |
