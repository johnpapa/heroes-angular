# AI Agent Guide — heroes-angular

## Project Overview

Tour of Heroes — an Angular 11 single-page application demonstrating CRUD operations for heroes and villains. Uses **NgRx/data** for state management, **json-server** as a mock REST API, **Bulma** for CSS, and **Cypress** for end-to-end tests.

## Repository Structure

```
heroes-angular/
├── src/
│   ├── app/
│   │   ├── app.module.ts              # Root module
│   │   ├── app.component.ts           # Root component
│   │   ├── router.ts                  # Top-level routes (lazy-loaded feature modules)
│   │   ├── about.component.ts         # Static about page
│   │   ├── heroes/                    # Heroes feature module (lazy-loaded)
│   │   │   ├── heroes.module.ts       # Feature NgModule with child routes
│   │   │   ├── heroes.component.ts    # Smart/container component
│   │   │   ├── hero-list.component.ts # Dumb/presentational list component
│   │   │   ├── hero-detail.component.ts # Dumb/presentational detail component
│   │   │   └── hero.service.ts        # NgRx EntityCollectionService
│   │   ├── villains/                  # Villains feature module (mirrors heroes)
│   │   ├── core/                      # Core module — nav, header, models
│   │   │   ├── model/hero.ts          # Hero entity class
│   │   │   ├── model/villain.ts       # Villain entity class
│   │   │   └── components/            # Header, nav, not-found components
│   │   ├── shared/                    # SharedModule — modal, card, button, list-header
│   │   ├── store/                     # NgRx store configuration
│   │   │   ├── store.module.ts        # StoreModule.forRoot + EntityDataModule
│   │   │   ├── entity-metadata.ts     # Entity metadata map (Hero, Villain)
│   │   │   └── config.ts              # DefaultDataServiceConfig (API URLs)
│   │   └── build-specific/            # Environment-specific module imports
│   ├── environments/                  # environment.ts / environment.prod.ts
│   ├── styles/                        # Global SCSS
│   └── index.html, main.ts, polyfills.ts
├── cypress/
│   ├── integration/heroes.spec.js     # E2E tests for hero CRUD
│   ├── support/                       # Cypress support files
│   └── plugins/                       # Cypress plugins
├── e2e/                               # Protractor e2e (legacy, not primary)
├── angular.json                       # Angular CLI workspace config
├── package.json                       # Dependencies and scripts
├── tsconfig.json                      # TypeScript root config
├── tslint.json                        # TSLint rules
├── proxy.conf.json                    # Dev proxy: /api → localhost:7627
├── db.json                            # json-server seed data
├── db.js                              # Programmatic seed data generator
├── routes.json                        # json-server route rewrites
├── server.js                          # Express static server (production)
├── Dockerfile                         # Container build
├── docker-compose.yml                 # Docker Compose config
└── cypress.json                       # Cypress configuration
```

## Tech Stack

| Layer            | Technology                          |
| ---------------- | ----------------------------------- |
| Framework        | Angular 11                          |
| Language         | TypeScript 4.0                      |
| State management | NgRx/data (entity collections)      |
| CSS framework    | Bulma + Font Awesome                |
| Styling          | SCSS (component + global)           |
| Backend (dev)    | json-server on port 7627            |
| Backend (prod)   | Express static server               |
| Dev proxy        | Angular CLI proxy (`proxy.conf.json`) |
| Unit tests       | Karma + Jasmine                     |
| E2E tests        | Cypress                             |
| Linting          | TSLint                              |
| Formatting       | Prettier (single quotes, 2-space)   |
| Containerization | Docker + Docker Compose             |

## Build & Run

```bash
# Install dependencies
npm install

# Run frontend + json-server backend concurrently
npm run quick

# Run frontend only (requires backend running separately)
npm run start-ng

# Run json-server backend only
npm run backend

# Production build
npm run build

# Serve production build
npm start
```

### Ports

| Service        | Port |
| -------------- | ---- |
| Angular dev    | 7626 |
| json-server    | 7627 |
| Express (prod) | 7626 |

### Proxy Configuration

In development, `/api/*` requests are proxied from port 7626 to json-server on port 7627. The `routes.json` file rewrites `/api/*` → `/$1` so the API is accessed at `/api/heroes`, `/api/villains`, etc.

## Testing

```bash
# Unit tests (Karma + Jasmine)
npm test

# E2E tests (Cypress) — requires app running via `npm run quick`
npm run cypress

# Run app + Cypress together
npm run e2e
```

### Cypress Tests

- Tests live in `cypress/integration/`
- `heroes.spec.js` covers: listing heroes, selecting, editing, deleting, adding, and direct routing
- Tests reset data via `POST /api/reset` before each test
- Cypress config is in `cypress.json` (port 7626)

## Key Patterns

### Smart vs. Presentational Components

The app follows the **smart/presentational** (container/dumb) component pattern:

- **Smart components** (`heroes.component.ts`, `villains.component.ts`): inject services, manage state, orchestrate data flow
- **Presentational components** (`hero-list.component.ts`, `hero-detail.component.ts`): receive data via `@Input()`, emit events via `@Output()`, use `ChangeDetectionStrategy.OnPush`

### NgRx/Data Entity Services

Services extend `EntityCollectionServiceBase<T>` rather than making raw HTTP calls:

```typescript
@Injectable({ providedIn: 'root' })
export class HeroService extends EntityCollectionServiceBase<Hero> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Hero', serviceElementsFactory);
  }
}
```

Entity metadata is defined in `store/entity-metadata.ts`. API URLs are configured in `store/config.ts` using `DefaultDataServiceConfig`.

### Lazy-Loaded Feature Modules

Heroes and Villains modules are lazy-loaded via the router:

```typescript
{ path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule) }
```

### Entity Models

Models are simple classes with `id`, `name`, and `description` fields (see `core/model/`).

## Coding Conventions

- **Single quotes** for strings (enforced by Prettier)
- **2-space indentation** (editorconfig + Prettier)
- **SCSS** for styles (configured in `angular.json` schematics)
- **`app-` prefix** for component selectors
- **`providedIn: 'root'`** for singleton services
- **Barrel exports** via `index.ts` files in `core/`
- **TrackBy functions** in `*ngFor` directives
- **Template files** (`.html`) for component templates — not inline

## Common Pitfalls

- **Don't forget the proxy**: the frontend expects `/api/*` to reach json-server. Always run `npm run quick` (not just `ng serve`) for full functionality
- **db.json is mutable**: json-server writes to `db.json` at runtime. Use `POST /api/reset` to restore seed data
- **Angular 11 specifics**: this project uses the older `--prod` flag syntax for builds and `relativeLinkResolution: 'legacy'`
- **TSLint (not ESLint)**: the project still uses TSLint — do not introduce ESLint config without migrating
- **No standalone components**: this predates Angular standalone components — all components belong to NgModules
