import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit, OnDestroy {
  otpForm: FormGroup;
  phone: string = '';
  otpTimer: number = 30;
  timerInterval: any;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.otpForm = this.fb.group({
      otp: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{4}$')
      ]]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.phone = params['phone'] || '';
      if (!this.phone) {
        this.router.navigate(['/login']);
      }
    });
    this.startOtpTimer();
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  startOtpTimer(): void {
    this.otpTimer = 30;
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

  onSubmit(): void {
    if (this.otpForm.valid) {
      this.isLoading = true;
      // Here you would typically make an API call to verify OTP
      // For now, we'll simulate it with a timeout
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      }, 1500);
    }
  }

  resendOtp(): void {
    if (this.otpTimer === 0) {
      // Here you would typically make an API call to resend OTP
      this.startOtpTimer();
    }
  }

  changeNumber(): void {
    this.router.navigate(['/login']);
  }
} 