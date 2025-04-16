import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  menuItems = [
    { path: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/admin/ambulances', icon: 'local_shipping', label: 'Ambulances' },
    { path: '/admin/users', icon: 'people', label: 'Users' },
    { path: '/admin/hospitals', icon: 'local_hospital', label: 'Hospitals' },
    { path: '/admin/emergency', icon: 'emergency', label: 'Emergency Situations' }
  ];
}
