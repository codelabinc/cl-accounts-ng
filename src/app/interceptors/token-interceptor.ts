import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpRequest, HttpHandler,
    HttpInterceptor, HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, take, filter, switchMap } from 'rxjs/operators';
import { AuthenticationService } from '../views/sessions/services/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    private isRefreshing = false;
    private tokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = this.authenticationService.getToken();
        request = this.addToken(request, accessToken);
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    // refresh token
                    return this.handle401Error(request, next);
                } else {
                    return throwError(error);
                }
            })
        );
    }


    private addToken(request: HttpRequest<any>, token: string) {
        return request.clone({
            setHeaders: { 'Authorization': `Bearer ${token}` }
        });
    }


    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        // If Refresh token api is not already in progress
        if (this.isRefreshing) {
            // If refreshTokenInProgress is true, we will wait until refreshTokenSubject has a non-null value
            // – which means the new token is ready and we can retry the request again
            return this.tokenSubject
                .pipe(
                    filter(token => token != null),
                    take(1),
                    switchMap(jwt => {
                        return next.handle(this.addToken(request, jwt))
                    }));
        } else {
            // updating variable with api is in progress
            this.isRefreshing = true;
            // Set the refreshTokenSubject to null so that subsequent API calls will wait until the new token has been retrieved
            this.tokenSubject.next(null);

            return this.authenticationService.refreshToken()
                .pipe(switchMap((response) => {
                    this.isRefreshing = false;
                    this.tokenSubject.next(response.token);
                    this.authenticationService.saveToken(response.token);
                    return next.handle(this.addToken(request, response.token));
                }));

        }
    }
}

