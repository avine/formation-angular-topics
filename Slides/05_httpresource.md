# Http Resource

<!-- .slide: class="page-title" -->



## Summary

<!-- .slide: class="toc" -->

<img src="./resources/angular.png" style="float: right; margin: 80px 250px 0 0; width: 250px" />

- [PrimeNG](#/1)
- [Transloco](#/2)
- [NgRx signals](#/3)
- [RxResource](#/4)
- **[HttpResource](#/5)**
- [RxJS](#/6)
- [In-depth resources](#/7)



## Http Resource - Definition

> Makes a reactive HTTP request and exposes the request status and response value as a writable resource

```ts
import { httpResource } from '@angular/common/http';
import { Component, input } from '@angular/core';
import { Post, User } from '../shared/api/api.types';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
})
export class UserPostsComponent {
  user = input.required<User>();

  protected posts = httpResource<Post[]>(() => ({
    url: 'https://jsonplaceholder.typicode.com/posts',
    params: { userId: this.user().id },
  }));
}
```



## Http Resource - Properties and usage

- The `HttpResource` properties and usage are almost the same as for `RxResource`
  - `value()`: The current value of the Resource, or undefined if there is no current value
  - `status()`: The current status of the Resource (Idle, Error, Loading, Resolved, ...)
  - `reload()`: Instructs the resource to reload
  - `isLoading()`: Whether this resource is loading a new value (or reloading the existing one)
  - `set()`: Convenience wrapper for `value.set`
  - `update()`: Convenience wrapper for `value.update`
  - ...

😉 *Note that `HttpResource` and `RxResource` are derived from the [`Resource`](https://angular.dev/guide/signals/resource) feature*



<!-- .slide: class="page-questions" -->



<!-- .slide: class="page-tp5" -->
