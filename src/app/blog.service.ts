import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Blog } from './blog'

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  url = 'http://104.38.28.206:8081';

  async getAllBlogs(): Promise<Blog[]> {
    const data = await fetch(`${this.url}/blog`);
    return await data.json() ?? {};
  }

  async getBlogById(id: number): Promise<Blog[] | undefined> {
      const data = await fetch(`${this.url}/blog/${id}`);
      return await data.json() ?? {};
  }

}
