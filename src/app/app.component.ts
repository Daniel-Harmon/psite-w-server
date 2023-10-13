import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ 
    RouterModule
  ]
})
export class AppComponent {
  title = 'daniel-harmon.com';
}