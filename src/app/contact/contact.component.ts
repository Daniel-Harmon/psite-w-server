import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="main">
      <p>
        You can find me elsewhere at these relevant links:
      </p>
      <ul>
        <li><a href="https://github.com/Dan-Harmon">GitHub</a></li>
        <li><a href="mailto:theedanielleeharmon@gmail.com">Email</a></li>
        <li>Youtube</li>
      </ul>
    </div>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
