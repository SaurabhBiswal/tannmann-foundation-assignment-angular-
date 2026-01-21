import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() userAdded = new EventEmitter<void>();

  userForm: FormGroup;
  message: string = '';
  messageType: 'success' | 'error' = 'success';
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get formControls() {
    return this.userForm.controls;
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.showMessage('Please fill all fields correctly', 'error');
      return;
    }

    this.isLoading = true;
    this.message = '';

    this.userService.createUser(this.userForm.value).subscribe({
      next: (response) => {
        if (response.success) {
          this.showMessage('✅ User registered successfully!', 'success');
          this.userForm.reset();
          this.userAdded.emit(); // Notify parent to refresh list
        } else {
          this.showMessage(`❌ ${response.message || 'Registration failed'}`, 'error');
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.showMessage(`❌ ${error.error?.message || 'Server error'}`, 'error');
        this.isLoading = false;
      }
    });
  }

  private showMessage(text: string, type: 'success' | 'error'): void {
    this.message = text;
    this.messageType = type;

    setTimeout(() => {
      this.message = '';
    }, 5000);
  }
}