import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { HttpClientModule } from '@angular/common/http'; 
import { OnInit } from '../onInit';
declare var MathJax:any;

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  blogService: BlogService = inject(BlogService);
  blog: Blog | undefined
  penis: string = '$$ilovelean\\neq$$'

  ngOnInit() {
    MathJax.typeset()
  }

  constructor(){
    const blogId = parseInt(this.route.snapshot.params['id'], 10);
    this.blogService.getBlogById(blogId).then(blog => {
      if(blog){
        this.blog = blog[0]
      }
      setTimeout(() => {MathJax.typeset()}, 0);
      });
  }
}
