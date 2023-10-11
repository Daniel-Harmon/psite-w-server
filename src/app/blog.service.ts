import { Injectable } from '@angular/core';
import { Blog } from './blog'

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogList: Blog[] = [
    {
      "id": 0,
      "tag": "piss",
      "title": "why i like pissing my pants 1",
      "date": new Date(),
      "content": "i just love pissing my pants so much, so very fun"
    },
    {
      "id": 1,
      "tag": "piss",
      "title": "why i like pissing my pants 2",
      "date": new Date(),
      "content": "i just love pissing my pants so much, so very fun"
    },
    {
      "id": 2,
      "tag": "piss",
      "title": "why i like pissing my pants 3",
      "date": new Date(),
      "content": "i just love pissing my pants so much, so very fun"
    }

  ];

  getAllBlogs(): Blog[] {
    return this.blogList;
  }

  getBlogById(id: number): Blog | undefined {
    return this.blogList.find(blog => blog.id === id);
  }

  constructor() { }
}
