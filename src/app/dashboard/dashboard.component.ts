import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, NavbarComponent, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  users: any[] = []; 

 constructor(private apiService: ApiService, private router: Router) {
  this.fetchData();
 }

 fetchData() {
  this.apiService.getData().subscribe({
    next: (data) => {
      this.users = data;
      console.log(data);
    },
    error: (err) => {
      console.error('Error fetching dashboard data', err);
    }
  });
}
 
}
