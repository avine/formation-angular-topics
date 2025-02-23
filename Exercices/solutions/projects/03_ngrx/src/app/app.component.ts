import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { TranslocoDatePipe } from '@jsverse/transloco-locale';
import { TagModule } from 'primeng/tag';
import { NavComponent } from './nav/nav.component';
import { SelectLangComponent } from './select-lang/select-lang.component';
import { ThemeComponent } from './theme/theme.component';

@Component({
  selector: 'app-root',
  host: { class: 'app-root' },
  imports: [
    TranslocoDatePipe,
    RouterLink,
    RouterOutlet,
    TranslocoDirective,
    TagModule,
    NavComponent,
    SelectLangComponent,
    ThemeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  protected now = Date.now();
}
