import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme',
  imports: [ButtonModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ThemeComponent {
  protected themeService = inject(ThemeService);
}
