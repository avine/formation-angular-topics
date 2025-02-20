import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { userPageGuard } from './user-page/user-page.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user/:userId',
    component: UserPageComponent,
    canActivate: [userPageGuard],
  },
];
