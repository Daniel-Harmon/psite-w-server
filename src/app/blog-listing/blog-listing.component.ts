import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Blog } from '../blog'

@Component({
  selector: 'app-blog-listing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="main padded-top">
      <a [routerLink]="['/blog', blog.id]" class="title"><b>{{ blog.title }}</b></a>
      <p class="tag"><b>{{ blog.date }} [ {{blog.tag}} ]</b></p>
    </div>
  `,
  styleUrls: ['./blog-listing.component.css']
})
export class BlogListingComponent {
  @Input() blog!: Blog;
}
