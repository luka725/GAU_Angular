import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './services/auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { AuthNotGuard } from './services/auth/auth-not.guard';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthNotGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'register', component:  RegistrationFormComponent, data: { expectedRole: 'Administrator' } },
  { path: 'appointments', component: AppointmentListComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
