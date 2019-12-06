import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let cl_token = localStorage.getItem('cl_token');
        if (cl_token) {
            req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${cl_token}`) });
        }

        return next.handle(req);
    }
}