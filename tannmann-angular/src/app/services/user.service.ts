import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, ApiResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://tannmann-foundation-assignment-angular.onrender.com/api/users';

  constructor(private http: HttpClient) { }

  // Get all users
  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }

  // Create new user
  createUser(user: User): Observable<ApiResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<ApiResponse>(this.apiUrl, user, { headers });
  }

  // Health check
  healthCheck(): Observable<any> {
    return this.http.get('https://tannmann-foundation-assignment-angular.onrender.com/api/health');
  }
}