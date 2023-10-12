import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogListingComponent } from '../blog-listing/blog-listing.component';
import { Blog } from '../blog'
import { BlogService } from '../blog.service'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, BlogListingComponent],
  template: `
  <div class="main div-border">
    <p>
      <b>Daniel Harmon</b> -- Pant Peeer
    </p>
    <p>
      <a [routerLink]="['/about']">about</a> / <a [routerLink]="['/contact']">contact</a> / <a>subscribe</a>
    </p>
  </div>
  <div><app-blog-listing *ngFor="let blog of blogList" 
    [blog]="blog">
  </app-blog-listing></div>
  `,
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  blogList: Blog[] = [];
  housingService: BlogService = inject(BlogService);

  constructor(){
    this.housingService.getAllBlogs().then(blogs => {
      this.blogList = blogs
    });
  }
}
