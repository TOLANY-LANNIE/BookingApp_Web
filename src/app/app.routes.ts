import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { DashboardComponent } from './features/customer/dashboard/dashboard.component';
import { ConflictListComponent } from './features/mananger/conflict-list/conflict-list.component';
import { AuthComponent } from './layout/auth/auth.component';
import { OrderListComponent } from './features/operator/order-list/order-list.component';


const routes: Routes = [
    {
        path: 'auth',
        component:AuthComponent,
        children: [
        {path: 'login', component: LoginComponent},
        {path: 'sign-up', component: SignUpComponent},
        ]
    },
    {path: 'conflict-list', component:ConflictListComponent },
    {path: 'dashboard', component:DashboardComponent },
    {path: 'bookings', component:OrderListComponent },
    {path:'', redirectTo:'/auth/login', pathMatch:'full'}

    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{ }