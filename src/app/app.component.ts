import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Child1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularPractice';
}

