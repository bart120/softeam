import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { Storage } from '@ionic/storage';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private auth: AuthenticationService, private storage: Storage) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const token = this.storage.get('ACCESS_TOKEN');
        // if (token) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer 4Ar2hI_sO4-Iiv2wyZhQ-6zpKa2elwzQyv3WHBDyo-9jo-Sthr7qLw66Pdc8dzXkjEHc_Iz9qlTFXnCHGW9RWLaO8O77SCnUW26gwUTQ0HWu9oKWZKab7MR3NpwCFwgjNJ2NVm5ehh1WkyapZEzLWksnouf2d6Ms0BpaJ0b7e40VqW4yfU34KwI9Z_6421I-C7WA2TnZWNqCTo2P1wqcnU3k5YwLQ2C_KIMJLshfRtw`
            }
        });

        if (!req.headers.has('Content-Type')) {
            req = req.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }



        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });


        // }

        return next.handle(req);

    }

}
