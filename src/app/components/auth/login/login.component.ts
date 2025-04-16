import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  otpForm: FormGroup;
  showOtpScreen = false;
  countryCode = '+91';
  otpTimer = 16;
  timerInterval: any;
  isLoading = false;

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

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      
      // Here you would typically make an API call to send OTP
      // For now, we'll simulate it with a timeout
      setTimeout(() => {
        this.isLoading = false;
        // Navigate to OTP verification page with phone number
        this.router.navigate(['/verify-otp'], {
          queryParams: {
            phone: this.loginForm.get('phone')?.value
          }
        });
      }, 1500);
    }
  }

  startOtpTimer() {
    this.otpTimer = 16;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.timerInterval = setInterval(() => {
      if (this.otpTimer > 0) {
        this.otpTimer--;
      } else {
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  resendOtp() {
    if (this.otpTimer === 0) {
      // TODO: Implement actual OTP resend
      console.log('Resending OTP...');
      this.startOtpTimer();
    }
  }

  changeNumber() {
    this.showOtpScreen = false;
    this.otpForm.reset();
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  goToAdminLogin() {
    this.router.navigate(['/admin/login']);
  }

  goToDriverLogin() {
    this.router.navigate(['/driver/login']);
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
}
