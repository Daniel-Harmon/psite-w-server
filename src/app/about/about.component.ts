import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="main">
      <p><b>What is good gamers!</b> Welcome to my blog. I'm a second year CS and Math undergrad at Penn State. My academic interests mainly lie in artificial intelligence, dynamical systems, optimization, and game theory.</p>
      <p>I've wanted to make a website like this for a long time, and I have a week off from school work to do it this week. I'll probably fill this with math and sciency stuff I'm thinking about alongside project logs and such. Might also toss in some political stuff here and there, depends on the vibe.</p>
    </div>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

}
