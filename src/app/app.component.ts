// import { DashboardComponent } from './components/dashboard/dashboard.component'; // Ensure correct path
// import { Component } from '@angular/core';
// import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, DashboardComponent ],
//   template: '<div class="app-container"><app-dashboard></app-dashboard></div>', // Use the component in the template
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title: any;
// }


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
      <router-outlet></router-outlet>
    <footer></footer>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}






