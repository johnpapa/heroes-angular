# Copilot Instructions — heroes-angular

## Project Context

This is the **Tour of Heroes** Angular 11 application — a CRUD SPA for managing heroes and villains. It uses NgRx/data for state management, json-server as a mock REST API, and Cypress for E2E testing.

## Angular Conventions

### Component Architecture

Follow the **smart/presentational** pattern used throughout the app:

- **Smart (container) components** — inject services, subscribe to observables, orchestrate state
  - Example: `heroes.component.ts` injects `HeroService`, calls `getAll()`, delegates CRUD
- **Presentational (dumb) components** — stateless, use `@Input()`/`@Output()`, `ChangeDetectionStrategy.OnPush`
  - Example: `hero-list.component.ts`, `hero-detail.component.ts`

### Creating a New Component

```bash
ng generate component <feature>/<component-name> --change-detection OnPush
```

- Use `app-` selector prefix (configured in `angular.json`)
- Use separate `.html` template files, not inline templates
- Use SCSS for styles
- Add to the appropriate feature module's `declarations` array

### Creating a New Service

Entity services extend `EntityCollectionServiceBase<T>`:

```typescript
@Injectable({ providedIn: 'root' })
export class NewEntityService extends EntityCollectionServiceBase<NewEntity> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('NewEntity', serviceElementsFactory);
  }
}
```

Then register the entity in `store/entity-metadata.ts`:

```typescript
const entityMetadata: EntityMetadataMap = {
  Hero: {},
  Villain: {},
  NewEntity: {}
};
```

And add API URL config in `store/config.ts`.

### Creating a New Feature Module

1. Create `src/app/<feature>/<feature>.module.ts` with child routes
2. Add lazy-loaded route in `src/app/router.ts`
3. Create container component + list/detail presentational components
4. Create entity service extending `EntityCollectionServiceBase`
5. Register entity in `store/entity-metadata.ts` and `store/config.ts`
6. Add seed data to `db.json` and route rewrite to `routes.json`

## Code Style

- **Single quotes** for strings
- **2-space indentation**
- **No semicolons** are not enforced — use them consistently (the project uses semicolons)
- **Prettier** handles formatting (see `.prettierrc`)
- **TSLint** for linting (run `npm run lint`)

## State Management

This project uses **NgRx/data** — not raw NgRx actions/reducers/effects. Key points:

- Entities are registered in `store/entity-metadata.ts`
- API URLs are configured in `store/config.ts` via `DefaultDataServiceConfig`
- Services expose observables like `entities$`, and methods like `getAll()`, `add()`, `update()`, `delete()`
- Do **not** create manual NgRx actions, reducers, or effects for standard CRUD — NgRx/data handles this automatically

## API & Backend

- **json-server** runs on port 7627 with `db.json` as the data source
- **Angular CLI proxy** forwards `/api/*` → `http://localhost:7627` (see `proxy.conf.json`)
- **Route rewrites** in `routes.json` strip the `/api` prefix
- Environment files (`src/environments/`) set the API base URL

## Testing Guidelines

### Unit Tests

- Run with `npm test` (Karma + Jasmine)
- Test files use `.spec.ts` suffix
- Place test files next to the source file they test

### E2E Tests (Cypress)

- Tests are in `cypress/integration/`
- Tests expect the app running on port 7626 with json-server on 7627
- Use `cy.request('POST', '/api/reset', data)` to reset test data
- Follow existing patterns: use CSS class selectors (`.list .name`, `.edit-detail`, `.modal-hero`)

## Maintenance Matrix

| When you change…                  | Also update…                                          |
| --------------------------------- | ----------------------------------------------------- |
| Entity model (`core/model/`)      | `store/entity-metadata.ts`, `store/config.ts`, `db.json` |
| Routes (`router.ts`)              | Nav component (`core/components/nav.component.ts`)     |
| API endpoints (`store/config.ts`) | `proxy.conf.json`, `routes.json`, `db.json`            |
| Feature module                    | `router.ts` (lazy load), `store/entity-metadata.ts`   |
| Shared components                 | `shared/shared.module.ts` declarations and exports     |
| Global styles                     | `src/styles/` SCSS files, verify Bulma class usage     |
| Package dependencies              | Run `npm install`, verify build with `npm run build`   |
| Cypress selectors                 | `cypress/integration/` test files                      |
| Environment config                | Both `environment.ts` and `environment.prod.ts`        |
