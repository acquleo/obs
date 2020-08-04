import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthServiceService } from '../services/auth-service.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthServiceService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const currentUser = this.authenticationService.getcurrentcode();
        const data = btoa(`${currentUser}:${currentUser}`);
        if (currentUser) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Basic ${data}`
                }
            });
        }

        return next.handle(request);
    }
}