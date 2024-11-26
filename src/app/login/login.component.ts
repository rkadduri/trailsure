// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from './../services/data.services';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports:[FormsModule, CommonModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';
//   errorMessage: string = '';

//   constructor(private dataService: DataService, private router: Router) {}

//   login(): void {
//     this.dataService.getUserData().subscribe({
//       next: (users) => {
//         const user = users.find(
//           (u) => u.username === this.username && u.password === this.password
//         );

//         if (user) {
//           alert('Login successful!');
//           this.router.navigate(['/dashboard']); // Navigate to dashboard or any other page
//         } else {
//           this.errorMessage = 'Invalid username or password';
//         }
//       },
//       error: (err) => {
//         console.error('Error loading user data:', err);
//         this.errorMessage = 'Unable to load user data.';
//       },
//     });
//   }
// }


// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { DataService } from './../services/data.services';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';
//   errorMessage: string = '';

//   constructor(private http: HttpClient, private router: Router) {}

//   login(): void {
//     this.http.get<any[]>('/assets/users.json').subscribe({
//       next: (users) => {
//         const user = users.find(
//           (u) => u.username === this.username && u.password === this.password
//         );

//         if (user) {
//           alert('Login successful!');
//           this.router.navigate(['/dashboard']); // Navigate to dashboard
//         } else {
//           this.errorMessage = 'Invalid username or password';
//         }
//       },
//       error: (err) => {
//         console.error('Error loading user data:', err);
//         this.errorMessage = 'Unable to load user data.';
//       },
//     });
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Corrected property name to `styleUrls`
})
export class LoginComponent {
  username: string = ''; // Input field for username
  password: string = ''; // Input field for password
  errorMessage: string = ''; // Error message to display

  constructor(private dataService: DataService, private router: Router) {}

  /**
   * Handles the login process by validating user credentials.
   */
  login(): void {
    if (!this.username || !this.password) {
      this.errorMessage = 'Username and password are required.';
      return;
    }

    this.dataService.getUserData().subscribe({
      next: (users) => {
        // Find user based on input credentials
        const user = users.find(
          (u: { username: string; password: string; }) => u.username === this.username && u.password === this.password
        );

        if (user) {
//          alert('Login successful!');
         // this.router.navigate(['/dashboard']);
        // window.location.reload(); // Full page reload

        this.router.navigate(['/dashboard']).then(() => {
          window.location.reload(); 
        });
        
        } else {
          this.errorMessage = 'Invalid username or password.';
        }
      },
      error: (err) => {
        console.error('Error loading user data:', err);
        this.errorMessage = 'Unable to load user data. Please try again later.';
      },
    });
  }
}

