import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginResponse } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true; // To toggle password visibility
  loginForm!: FormGroup;
  errorMessage: string = ''; 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService // Inject AuthService
  ) { }

  ngOnInit() {
    // Initialize Login Form Group
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', Validators.required],
    });
  }

  clickEvent(event: MouseEvent): void {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    const { email, password } = this.loginForm.value; // Access form values

    this.authService.login(email, password).subscribe(
      (response: LoginResponse) => {
        // Handle successful login, e.g., store token and user info
        localStorage.setItem('userToken', response.token!); // Adjust as necessary
        this.router.navigate(['/dashboard']); // Navigate to dashboard or another route
      },
      (error) => {
        // Handle error response
        this.errorMessage = 'Invalid login credentials. Please try again.';
        console.error('Login error:', error);
      }
    );
  }
}