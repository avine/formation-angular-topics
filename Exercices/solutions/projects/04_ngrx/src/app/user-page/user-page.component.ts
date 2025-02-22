import { Component, DestroyRef, inject, ViewEncapsulation } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { UserPostsStore } from '../shared/user-posts.store';
import { UserStore } from '../shared/user.store';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-user-page',
  imports: [TranslocoDirective, ButtonModule, CardModule, DialogModule, UserDetailsComponent],
  templateUrl: './user-page.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UserPageComponent {
  protected userStore = inject(UserStore);

  protected userPostsStore = inject(UserPostsStore);

  constructor() {
    inject(DestroyRef).onDestroy(() => this.userStore.setUserId(undefined));
  }
}
