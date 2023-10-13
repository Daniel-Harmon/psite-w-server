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
  templateUrl: './home.component.html',
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
