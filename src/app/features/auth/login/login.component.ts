
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  hide = true; // To toggle password visibility
  loginForm!:FormGroup;
  email!: string;
  password!: string;
  errorMessage: string = ''; 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }


  ngOnInit(){
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
   
  }

}