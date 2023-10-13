import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'
import { BlogComponent } from './blog/blog.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'home'
    },
    {
      path: 'about',
      component: AboutComponent,
      title: 'about'
    },
    {
      path: 'contact',
      component: ContactComponent,
      title: 'contact'
    },
    {
      path: 'blog/:id',
      component: BlogComponent,
      title: 'blog'
    },
    {
      path: 'tex-svg.js',
      
    }
  ];
  
  export default routeConfig;