import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  blogService: BlogService = inject(BlogService);
  blog: Blog | undefined

  constructor(){
    const blogId = parseInt(this.route.snapshot.params['id'], 10);
    this.blogService.getBlogById(blogId).then(blog => {
      console.log(blog)
      if(blog){
        this.blog = blog[0]
      }
    });
  }
}
