import { DOCUMENT } from '@angular/common';
import { inject, Injectable, RendererFactory2, signal } from '@angular/core';
import { DARK_MODE_CSS_CLASS } from './theme.constants';
import { Theme } from './theme.types';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document = inject(DOCUMENT);

  private renderer = inject(RendererFactory2).createRenderer(null, null);

  private _theme = signal<Theme>('light');
  theme = this._theme.asReadonly();

  switchTheme(theme?: Theme) {
    const nextTheme: Theme = theme ?? (this._theme() === 'light' ? 'dark' : 'light');

    this._theme.set(nextTheme);

    this.renderer[nextTheme === 'dark' ? 'addClass' : 'removeClass'](
      this.document.documentElement,
      DARK_MODE_CSS_CLASS,
    );

    this.document.defaultView?.localStorage.setItem('app-theme', nextTheme);
  }

  restoreTheme() {
    let theme = this.document.defaultView?.localStorage.getItem('app-theme') ?? undefined;
    if (!theme || !this.isTheme(theme)) {
      const preferDark = this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches;
      theme = preferDark === true ? ('dark' satisfies Theme) : ('light' satisfies Theme);
    }
    this.switchTheme(theme as Theme);
  }

  private isTheme(value: string): value is Theme {
    const themes: Theme[] = ['light', 'dark'];
    return (themes as string[]).includes(value);
  }
}
