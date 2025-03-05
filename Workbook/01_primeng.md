## Lab 1: PrimeNG

### `src/app/*`

- In your Angular app, replace the directory `src/app` with `Exercices/solutions/projects/00_vanilla/src`

### `src/styles.scss`

- Import PrimeNG icons

```scss
@import 'primeicons/primeicons.css';
```

### `src/app/app.config.ts` 

- Add PrimeNG provider

```ts
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),

    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false,
        },
      },
    }),
  ],
};
```

<div class="pb"></div>

### `NavComponent`

Use the `MenuModule` to display the navigation

```ts
import { MenuModule } from 'primeng/menu';
```

### `UserPostsComponent`

- Use `CardModule` to display the user details

- Use `ButtonModule` to display post links

- Use `DialogModule` to display the post details

```ts
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
```

### `UserDetailsComponent`

- Use PrimeNG icons to enhance the card's details

<div class="pb"></div>
