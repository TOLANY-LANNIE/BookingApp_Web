import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

export interface LoginResponse {
  message: string;
  username: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/users`; // API endpoint
  private currentUser: LoginResponse | null = null; // Store the user info in memory

  constructor(private http: HttpClient) {}

  // Method for logging in
  login(email: string, password: string): Observable<LoginResponse> {
    const loginData = { email, password };
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, loginData);
  }

  // Handle login success (store user info in localStorage)
  setCurrentUser(user: LoginResponse): void {
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user)); // Store user info
  }

  // Retrieve the current user from local storage or memory
  getCurrentUser(): LoginResponse | null {
    if (!this.currentUser) {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
      }
    }
    return this.currentUser;
  }

  // Check if the user is authenticated (i.e., logged in)
  isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }

  // Check if the user has a specific role
  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user?.role === role;
  }

  // Method for logging out
  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser'); // Remove user info from storage
  }
}
