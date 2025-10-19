import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  inject,
  isDevMode,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideTransloco, TranslocoService } from '@jsverse/transloco';
import { provideTranslocoLocale } from '@jsverse/transloco-locale';
import { provideTranslocoPersistLang, TranslocoPersistLangService } from '@jsverse/transloco-persist-lang';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { UsersStore } from './shared/users.store';
import { DARK_MODE_CSS_CLASS } from './theme/theme.constants';
import { ThemeService } from './theme/theme.service';
import { TranslocoHttpLoader } from './transloco-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch()),
    provideAppInitializer(() => inject(UsersStore).loadUsers()),
    provideAnimationsAsync(),

    provideAppInitializer(() => inject(ThemeService).restoreTheme()),

    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: `.${DARK_MODE_CSS_CLASS}`,
        },
      },
    }),

    provideTransloco({
      config: {
        availableLangs: ['en', 'fr'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    provideTranslocoLocale({ langToLocaleMapping: { en: 'en-US', fr: 'fr-FR' } }),
    provideTranslocoPersistLang({ storage: { useValue: localStorage } }),
    provideAppInitializer(() =>
      inject(TranslocoService).load(inject(TranslocoPersistLangService).getCachedLang() ?? 'en'),
    ),
  ],
};
