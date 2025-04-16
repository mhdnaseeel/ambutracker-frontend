import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './driver-login.component.html',
  styleUrls: ['./driver-login.component.css']
})
export class DriverLoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  countryCode = '+91';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      phone: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      // Here you would typically make an API call to send OTP
      // For now, we'll simulate it with a timeout
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/verify-otp'], {
          queryParams: {
            phone: this.loginForm.get('phone')?.value,
            type: 'driver'
          }
        });
      }, 1500);
    }
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}
