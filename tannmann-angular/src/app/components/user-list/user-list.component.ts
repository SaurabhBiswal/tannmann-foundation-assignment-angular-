import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Subscription, interval } from 'rxjs';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  isLoading: boolean = true;
  error: string = '';

  private refreshSubscription?: Subscription;
  private autoRefreshInterval = 10000; // 10 seconds

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
    this.startAutoRefresh();
  }

  ngOnDestroy(): void {
    this.stopAutoRefresh();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.error = '';

    this.userService.getUsers().subscribe({
      next: (response) => {
        if (response.success) {
          this.users = response.users || [];
        } else {
          this.error = response.message || 'Failed to load users';
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to connect to server';
        this.isLoading = false;
        console.error('Error loading users:', err);
      }
    });
  }

  startAutoRefresh(): void {
    this.refreshSubscription = interval(this.autoRefreshInterval)
      .subscribe(() => {
        this.loadUsers();
      });
  }

  stopAutoRefresh(): void {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  formatDate(dateString?: string): string {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
}