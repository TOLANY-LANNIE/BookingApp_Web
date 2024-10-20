import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { DashboardComponent } from './features/customer/dashboard/dashboard.component';
import { ConflictListComponent } from './features/mananger/conflict-list/conflict-list.component';
import { AuthComponent } from './layout/auth/auth.component';
import { OrderListComponent } from './features/operator/order-list/order-list.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { UnauthorizedComponent } from './features/unauthorized/unauthorized.component';


const routes: Routes = [
    {
        path: 'auth',
        component:AuthComponent,
        children: [
        {path: 'login', component: LoginComponent},
        {path: 'sign-up', component: SignUpComponent},
        ]
    },
    {
        path: 'conflict-list', 
        component:ConflictListComponent,
        //canActivate: [RoleGuard], 
        data: { roles: ['48f6b15b-6628-44ad-b513-4c563958d82c'] }

    },
    {
        path: 'dashboard', 
        component:DashboardComponent,
        //canActivate: [RoleGuard], 
        data: { roles: ['050a2e76-10b1-40c8-814c-1473763e683b'] } 
    },
    {
        path: 'bookings', 
        component:OrderListComponent,
        //canActivate: [RoleGuard], 
        data: { roles: ['513c9237-daed-4666-802a-8944ee57b10f'] } 
    },
    {
        path: 'unauthorized',
        component: UnauthorizedComponent
      },
    {path:'', redirectTo:'/auth/login', pathMatch:'full'}

    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{ }