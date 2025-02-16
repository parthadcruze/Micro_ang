import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

declare var bootstrap: any; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  username: string | null = null;

  newUser = { username: '', password: '', repassword: '' };

  constructor(private router: Router, private apiService:ApiService) {}

  openCreateUserModal() {
    const modal = new bootstrap.Modal(document.getElementById('createUserModal'));
    modal.show();
  }

  saveUser() {
    if (this.newUser.password !== this.newUser.repassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('User Created:', this.newUser);
    var loginData = { username: this.newUser.username, password: this.newUser.password };

    this.apiService.create_login(loginData).subscribe({
      next: (response) => {
        alert('User created successfully!');
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Invalid username or password');
      }
    });

    document.getElementById('createUserModal')?.classList.remove('show'); 
  }


  ngOnInit() {
    this.username = localStorage.getItem('username'); 
  }

  onLogout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token'); 
    this.router.navigate(['/login']); 
  }

  createNewUser() {
    this.router.navigate(['/register']); 
  }
}
