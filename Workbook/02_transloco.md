## Lab 2: Transloco

- Run the schematics to add Transloco to your app

```shell
ng add @jsverse/transloco
```

- Define translations in the translation files

```txt
public/assets/i18n/*.json
```

- Use the Transloco directive to translate your app

```ts
import { TranslocoDirective } from '@jsverse/transloco';
```

- Use the Transloco pipe to localize the current date

```ts
import { TranslocoDatePipe } from '@jsverse/transloco-locale';
```

- Copy the `SelectLangComponent` to your app to enable switching between available languages

```txt
Exercices/solutions/projects/02_transloco/src/app/select-lang
```

<div class="pb"></div>
