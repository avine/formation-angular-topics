# Rx Resource

<!-- .slide: class="page-title" -->



## Summary

<!-- .slide: class="toc" -->

- [PrimeNG](#/1)
- [Transloco](#/2)
- [NgRx signals](#/3)
- **[RxResource](#/4)**
- [HttpResource](#/5)
- [RxJS](#/6)
- [In-depth resources](#/7)



## Rx Resource - Definition

- Construct an RxResource that projects a reactive request to an observable defined by a loader function,
  which exposes the emitted values via signals

```ts
import { Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ApiService } from '../shared/api/api.service';
import { User } from '../shared/api/api.types';

@Component({
  selector: 'app-user-posts',
  template: './user-posts.component.html'
})
export class UserPostsComponent {
  user = input.required<User>();

  protected apiService = inject(ApiService);

  protected posts = rxResource({
    request: () => this.user().id,
    loader: ({ request }) => this.apiService.getUserPosts(request),
  });
}
```



## Rx Resource - Properties

- RxResource provides useful properties
  - `value()`: The current value of the Resource, or undefined if there is no current value
  - `status()`: The current status of the Resource
  - `reload()`: Instructs the resource to reload
  - `isLoading()`: Whether this resource is loading a new value (or reloading the existing one)
  - `set()`: Convenience wrapper for `value.set`
  - `update()`: Convenience wrapper for `value.update`



## Rx Resource - Usage

- In this example, we are taking advantage of `isLoading()` and `value()` properties

```html
<!-- user-posts.component.html -->

@if (posts.isLoading()) {

  Loading...

} @else {

  @for (post of posts.value(); track post.id) {
  
    <button> {{ post.title }} </button>
  
  } @empty {
  
    No posts available.
  }
}
```



<!-- .slide: class="page-questions" -->



<!-- .slide: class="page-tp4" -->
