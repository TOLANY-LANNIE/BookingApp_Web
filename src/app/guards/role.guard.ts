import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route.data['expectedRole']);
    const expectedRole = route.data['expectedRole'];

    if (!this.authService.isAuthenticated() || !this.authService.hasRole(expectedRole)) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
