// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

export interface LoginResponse {
  // Define the structure of the expected response
  // Adjust according to your actual API response
  id: string;
  email: string;
  role: string;
  token?: string; // Include this if your API returns a token
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/users`; // API endpoint

  constructor(private http: HttpClient) {}

  // Method for logging in
  login(email: string, password: string): Observable<LoginResponse> {
    const loginData = { email, password };
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, loginData);
  }

  // Method for logging out
  logout(): void {
    // Implement logout logic, such as clearing tokens from local storage
    localStorage.removeItem('userToken'); // Example
  }

  // Optional: Method to retrieve user information
  getUserInfo(): Observable<LoginResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('userToken')}` // Example of adding a token
    });
    return this.http.get<LoginResponse>(`${this.apiUrl}/profile`, { headers });
  }
}
