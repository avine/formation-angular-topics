# PrimeNG

<!-- .slide: class="page-title" -->



## Summary

<!-- .slide: class="toc" -->

- **[PrimeNG](#/1)**
- [Transloco](#/2)
- [NgRx signals](#/3)
- [RxResource](#/4)
- [HttpResource](#/5)
- [RxJS](#/6)
- [In-depth resources](#/7)



## PrimeNG - Installation

- Install core library

```shell
npm install primeng @primeng/themes
```



## PrimeNG - Configuration

- Add `providePrimeNG` (and Angular animations) to the application config providers

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
        options: { darkModeSelector: '.dark-theme' },
      },
    }),
  ],
};
```



## PrimeNG - Usage

- Import the desired module from `primeng/*` and use it in your component templates

```ts
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-root',
  imports: [CardModule],
  template: `
    <p-card header="Simple Card">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p-card>
  `,
})
export class AppComponent {}
```



## PrimeNG - Icons

- Install icons library

```shell
npm install primeicons
```

- Import the icons set in your `styles.scss` file

```scss
@import 'primeicons/primeicons.css';
```

- Use icons in your component templates

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <i class="pi pi-check"></i>
    <i class="pi pi-times"></i>
  `,
})
export class AppComponent {}
```



<!-- .slide: class="page-questions" -->



<!-- .slide: class="page-tp1" -->
