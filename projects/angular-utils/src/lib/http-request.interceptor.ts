import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('token') || localStorage.getItem('accessToken');

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) });
        }

        return next.handle(request);
    }
}
