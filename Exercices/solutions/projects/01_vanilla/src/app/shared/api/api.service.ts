import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post, User } from './api.types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpClient = inject(HttpClient);

  readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  getUsers() {
    return this.httpClient.get<User[]>(this.baseUrl + '/users');
  }

  getUserPosts(userId: number) {
    return this.httpClient.get<Post[]>(this.baseUrl + '/posts', { params: { userId } });
  }
}
