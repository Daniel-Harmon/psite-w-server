import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="main">
      <h3>{{ blog?.title }}</h3>
      <p><b>{{ blog?.date?.toDateString() }} [ {{blog?.tag}} ]</b></p>
      <p>{{ blog?.content }}</p>
    </div>
  `,
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  blogService: BlogService = inject(BlogService);
  blog: Blog | undefined

  constructor(){
    const blogId = parseInt(this.route.snapshot.params['id'], 10);
    this.blog = this.blogService.getBlogById(blogId);
  }
}
