import { DatePipe } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ThemeComponent } from './theme/theme.component';

@Component({
  selector: 'app-root',
  host: { class: 'app-root' },
  imports: [DatePipe, RouterLink, RouterOutlet, NavComponent, ThemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  protected now = Date.now();
}
