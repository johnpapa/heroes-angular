# Heroes Angular — Agent Guide

## Project Overview

**Tour of Heroes** — an Angular 11 single-page application demonstrating CRUD operations for heroes and villains. Uses **NgRx/data** for state management, **json-server** as a mock REST backend, and **Cypress** for end-to-end tests.

## Repository Structure

```
heroes-angular/
├── src/
│   ├── app/
│   │   ├── core/              # Layout components (header, nav) and domain models
│   │   │   ├── components/    # HeaderBar, Nav, NotFound components
│   │   │   └── model/         # Hero & Villain interfaces
│   │   ├── heroes/            # Heroes feature module (list, detail, service)
│   │   ├── villains/          # Villains feature module (list, detail, service)
│   │   ├── shared/            # Reusable UI components (modal, card, buttons)
│   │   ├── store/             # NgRx/data entity metadata & store config
│   │   ├── build-specific/    # Environment-specific module imports
│   │   ├── app.module.ts      # Root module
│   │   ├── app.component.*    # Root component
│   │   ├── about.component.ts # About page
│   │   └── router.ts          # Route definitions
│   ├── environments/          # Angular environment configs
│   ├── styles.scss            # Global styles (Bulma + Font Awesome)
│   └── index.html             # Entry HTML
├── cypress/
│   ├── integration/heroes.spec.js  # E2E tests
│   ├── fixtures/              # Test data
│   └── support/               # Custom commands
├── e2e/                       # Protractor e2e (legacy)
├── server.js                  # Express static file server (production)
├── db.json                    # json-server seed data
├── routes.json                # json-server route rewrites (/api/* → /*)
├── proxy.conf.json            # Angular dev-server proxy to json-server
├── angular.json               # Angular CLI workspace config
├── tsconfig.json              # Solution-style TypeScript config
├── tslint.json                # TSLint rules
├── Dockerfile                 # Container build
├── docker-compose.yml         # Docker Compose for local dev
└── package.json               # Dependencies and npm scripts
```

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 11 (TypeScript) |
| State management | NgRx/data (entity services) |
| CSS framework | Bulma + Font Awesome |
| Backend (dev) | json-server on port 7627 |
| Backend (prod) | Express static server on port 7626 |
| Unit tests | Karma + Jasmine |
| E2E tests | Cypress (primary), Protractor (legacy) |
| Linting | TSLint + Codelyzer |
| Styling | SCSS |

## Build & Run

```bash
# Install dependencies
npm install

# Start dev server (Angular + json-server)
npm run quick

# Build for production
npm run build          # outputs to dist/heroes-angular/

# Start production server
npm start              # serves dist/heroes-angular/ on port 7626

# Run unit tests
npm test

# Run linter
npm run lint

# Run Cypress e2e (starts app + opens Cypress)
npm run e2e
```

### Ports

| Service | Port |
|---|---|
| Angular dev server | 7626 |
| json-server API | 7627 |
| Cypress (configurable) | `Cypress.env('port')` |

## Key Patterns

### Feature Modules

Each feature (heroes, villains) follows the same pattern:

- `<feature>.module.ts` — declares components, registers entity service
- `<feature>.component.ts` — smart container managing list/detail state
- `<feature>-list.component.ts` — presentational list
- `<feature>-detail.component.ts` — presentational detail/edit form
- `<feature>.service.ts` — extends `EntityCollectionServiceBase` from NgRx/data

### State Management (NgRx/data)

Entity services (`HeroService`, `VillainService`) extend `EntityCollectionServiceBase`, which auto-generates CRUD actions and HTTP calls. Entity metadata is defined in `src/app/store/entity-metadata.ts`.

### API Layer

In development, Angular's proxy (`proxy.conf.json`) forwards `/api/*` to json-server on port 7627. The `routes.json` file maps `/api/*` → `/$1`.

### Component Architecture

Components use inline templates and SCSS. The app follows a container/presentational pattern: container components (`HeroesComponent`, `VillainsComponent`) manage state via entity services; presentational components receive data via `@Input()` and emit events via `@Output()`.

## Testing

### Unit Tests

```bash
npm test              # Karma + Jasmine, watches by default
```

Tests use Angular TestBed. The Karma config is at `src/karma.conf.js`.

### E2E Tests (Cypress)

```bash
npm run quick         # Start app first
npx cypress open      # Then open Cypress
```

Cypress specs are in `cypress/integration/`. Tests use `cy.request('POST', '/api/reset', data)` to reset json-server data between runs.

## Common Pitfalls

- **json-server must be running** for the app to work in dev mode — use `npm run quick` (not `npm run start-ng` alone)
- **`npm run build` uses `--prod`** which enables AOT and tree-shaking; dev builds may behave differently
- **Entity IDs are strings** (e.g., `"HeroAslaug"`), not numbers
- **Proxy config** only applies during `ng serve`; in production, the Express server handles all routes
- **TSLint is deprecated** — this project still uses TSLint/Codelyzer (Angular 11 era)
