## Lab 4: RxResource

- Remove the `UserStore` from previous lab

- Restore `UserService` and expose the users using `rxResource` 

```ts
import { inject, Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiService = inject(ApiService);

  users = rxResource({ loader: () => this.apiService.getUsers() });
}
```

<div class="pb"></div>

- Remove the `UserPostsStore` from previous lab

- Handle the logic directly in `UserPostsComponent`

```ts
import {
  Component, computed, inject, input, signal, ViewEncapsulation
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { TranslocoDirective } from '@jsverse/transloco';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ApiService } from '../shared/api/api.service';
import { User } from '../shared/api/api.types';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-user-posts',
  imports: [
    TranslocoDirective, ButtonModule, CardModule,
    DialogModule, UserDetailsComponent
  ],
  templateUrl: './user-posts.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UserPostsComponent {
  protected apiService = inject(ApiService);

  user = input.required<User>();

  posts = rxResource({ /* Implement the resource logic */ });

  selectedPostId = signal<number | undefined>(undefined);

  selectedPost = computed(() => {
    const postId = this.selectedPostId();
    return this.posts.value()?.find(({ id }) => id === postId);
  });
}
```

<div class="pb"></div>
