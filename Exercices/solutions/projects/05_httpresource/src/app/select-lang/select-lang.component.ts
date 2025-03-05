import { Component, inject, ViewEncapsulation } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-select-lang',
  imports: [ButtonModule, MenuModule],
  templateUrl: './select-lang.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SelectLangComponent {
  private translocoService = inject(TranslocoService);

  items: MenuItem[] = [
    { label: 'Enslish', command: () => this.translocoService.setActiveLang('en') },
    { label: 'Français', command: () => this.translocoService.setActiveLang('fr') },
  ];
}
