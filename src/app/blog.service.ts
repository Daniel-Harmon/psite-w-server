import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Blog } from './blog'

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  url = 'http://localhost:4200';

  async getAllBlogs(): Promise<Blog[]> {
    const data = await fetch(`${this.url}/blogget`);
    return await data.json() ?? {};
  }

  async getBlogById(id: number): Promise<Blog[] | undefined> {
      const data = await fetch(`${this.url}/blogget/${id}`);
      return await data.json() ?? {};
  }

}
