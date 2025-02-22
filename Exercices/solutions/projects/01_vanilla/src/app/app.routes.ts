import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserPostsService } from './shared/user-posts.service';
import { UserPageComponent } from './user-page/user-page.component';
import { userPageResolver } from './user-page/user-page.resolver';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user/:userId',
    component: UserPageComponent,
    resolve: { user: userPageResolver },
    providers: [UserPostsService],
  },
];
