import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>Welcome!</h2>
    <p>Select a user to see its posts...</p>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {}
