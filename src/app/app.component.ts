import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
      <header class="main">
        <a [routerLink]="['/']" class="title">
            <h2>daniel-harmon.com</h2>
        </a>
      </header>
    
    <section>
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
  imports: [ 
    RouterModule
  ]
})
export class AppComponent {
  title = 'daniel-harmon.com';
}