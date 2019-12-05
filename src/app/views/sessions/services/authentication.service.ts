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

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.httpClient
    .post<LoginResponse>(`${environment.apiBaseUrl}/auth/login`, request, {headers: {'X-ACCOUNT-CODE': environment.xAccountCode}} );
  }

  refreshToken(): Observable<LoginResponse> {
    return this.httpClient.get<LoginResponse>(`${environment.apiBaseUrl}/auth/refresh-token`);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/sessions', 'signin']);
  }
}
