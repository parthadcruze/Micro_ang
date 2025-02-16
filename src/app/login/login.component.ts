import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { username: '', password: '' };

  constructor(private apiService: ApiService, private router: Router) {}

  onLogin() {
    this.apiService.login(this.loginData).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        alert('Login successful!');
        localStorage.setItem('token', response.token); 
        this.router.navigate(['/dashboard']); 
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Invalid username or password');
      }
    });
  }
}
