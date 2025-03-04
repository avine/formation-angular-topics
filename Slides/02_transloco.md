# Transloco

<!-- .slide: class="page-title" -->



## Summary

<!-- .slide: class="toc" -->

- [PrimeNG](#/1)
- **[Transloco](#/2)**
- [NgRx signals](#/3)
- [RxResource](#/4)
- [HttpResource](#/5)
- [RxJS](#/6)
- [In-depth resources](#/7)



## Transloco - Installation

> Transloco allows you to define translations for your content in different languages and switch between them easily in runtime

- Run the following schematics and specify the list of expected languages

```shell
ng add @jsverse/transloco
```

- The schematics will

  - install the package `@jsverse/transloco`
  - create a file `src/app/transloco-loader.ts`
  - create json files for each specified language in `src/assets/i18n/*.json` (*)
  - configure Transloco in your `src/app/app.config.ts` file

*(\*) But you should move the `src/assets/i18n` directory to `public/assets/i18n`*



## Transloco - Application Config

- The schematics adds `provideTransloco` to your application config providers

```ts
import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideTransloco } from "@jsverse/transloco";
import { TranslocoHttpLoader } from "./transloco-loader";

export const appConfig: ApplicationConfig = {
  providers: [
    provideTransloco({
      config: {
        availableLangs: ["en", "fr"],
        defaultLang: "en",
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
```



## Transloco - Translation files

- `public/assets/i18n/en.json`

```json
{
  "appTitle": "User posts",
  "copyright": "Copyright"
}
```

- `public/assets/i18n/fr.json`

```json
{
  "appTitle": "Messages des utilisateurs",
  "copyright": "Tous droits réservés"
}
```



## Transloco - Directive

- Import `TranslocoDirective` directive in your components

```ts
import { Component, RouterOutlet } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslocoDirective],
  template: `
    <ng-container *transloco="let t">
      <header>{{ t('appTitle') }}</header>

      <router-outlet />

      <footer>{{ t('copyright') }}</footer>
    </ng-container>
  `,
})
export class AppComponent {}
```



## Transloco - Plugins | Locale 1/3

- Install the following plugin to add localization support to Transloco

```shell
npm install @jsverse/transloco-locale
```



## Transloco - Plugins | Locale 2/3

- Configure the plugin by mapping Transloco languages to locales

```ts
import { ApplicationConfig } from '@angular/core';
import { provideTranslocoLocale } from '@jsverse/transloco-locale';

export const appConfig: ApplicationConfig = {
  providers: [
    provideTranslocoLocale({ langToLocaleMapping: { en: 'en-US', fr: 'fr-FR' } }),
  ],
};
```



## Transloco - Plugins | Locale 3/3

- Use directives provided by the plugin

```ts
import { Component } from '@angular/core';
import { TranslocoDatePipe } from '@jsverse/transloco-locale';

@Component({
  selector: 'app-root',
  imports: [TranslocoDatePipe],
  template: `<p>{{ now | translocoDate }}</p>`,
})
export class AppComponent {
  now = Date.now();
}
```



## Transloco - Plugins | Persist lang 1/2

- Install the following plugin to persist selected language

```shell
npm install @jsverse/transloco-persist-lang
```



## Transloco - Plugins | Persist lang 2/2

- Configure the plugin to use `localStorage`
- Pre-load cached language (optional)

```ts
import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { 
  provideTranslocoPersistLang, TranslocoPersistLangService
} from '@jsverse/transloco-persist-lang';

export const appConfig: ApplicationConfig = {
  providers: [
    provideTranslocoPersistLang({ storage: { useValue: localStorage } }),
    provideAppInitializer(() =>
      inject(TranslocoService).load(inject(TranslocoPersistLangService).getCachedLang() ?? 'en'),
    ),
  ],
};
```



<!-- .slide: class="page-questions" -->



<!-- .slide: class="page-tp2" -->
