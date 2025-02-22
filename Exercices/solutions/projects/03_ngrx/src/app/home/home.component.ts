import { Component, ViewEncapsulation } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-home',
  imports: [TranslocoDirective],
  template: `
    <ng-container *transloco="let t">
      <h2>{{ t('welcome') }}</h2>
      <p>{{ t('help') }}</p>
    </ng-container>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {}
