import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminLoginComponent } from './components/auth/admin-login/admin-login.component';
import { DriverLoginComponent } from './components/auth/driver-login/driver-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AmbulancesComponent } from './components/ambulances/ambulances.component';
import { UsersComponent } from './components/users/users.component';
import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { EmergencySituationsComponent } from './components/emergency-situations/emergency-situations.component';
import { VerifyOtpComponent } from './components/auth/verify-otp/verify-otp.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'driver/login', component: DriverLoginComponent },
  {
    path: 'admin',
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'ambulances', component: AmbulancesComponent },
      { path: 'users', component: UsersComponent },
      { path: 'hospitals', component: HospitalsComponent },
      { path: 'emergency', component: EmergencySituationsComponent }
    ]
  },
  { path: 'verify-otp', component: VerifyOtpComponent },
  { path: '**', redirectTo: 'login' }
];
export default routes;
