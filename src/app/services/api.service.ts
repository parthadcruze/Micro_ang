import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7285/login/logging'; 
  private apiUrl_get = 'https://localhost:7285/getdata'; 

  private getToken(): string | null {
    const tk = localStorage.getItem('token')?.toString();
    return localStorage.getItem('token');
  }

  constructor(private http: HttpClient) {}

  login(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }

  getData(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get(`${this.apiUrl_get}`, { headers });
  }
}

