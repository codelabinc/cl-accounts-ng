import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpRequest, HttpHandler,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../views/sessions/services/authentication.service';
import { LoginResponse } from '../views/sessions/model/login-model';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    // refresh token
                    this.authenticationService.refreshToken()
                        .pipe()
                        .subscribe((response: LoginResponse) => {
                            if (response.token) {
                                localStorage.setItem('cl_token', response.token);
                            }
                        })
                } else {
                    return throwError(error);
                }
            })
        );
    }
}