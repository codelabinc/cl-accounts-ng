import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { LoginRequest, LoginResponse } from '../model/login-model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private TOKEN_KEY = 'cl_token';

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.httpClient
    .post<LoginResponse>(`${environment.apiBaseUrl}/auth/login`, request, {headers: {'X-ACCOUNT-CODE': environment.xAccountCode}} );
  }

  refreshToken(): Observable<LoginResponse> {
    return this.httpClient.get<LoginResponse>(`${environment.apiBaseUrl}/auth/refresh-token`);
  }

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/sessions', 'signin']);
  }
}
