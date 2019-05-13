import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    token = 'xmH0XmrapejjPVpAR-0duVNLHWfVjP4SP9udO7ghL3hn0kHnCmXs-zkDxPstw41__dRCW7dfMo3tvPvxWpZu72VuyQp2dJdVtnAv6H3dr2HtxFWrKCx5kZXXsbyFJFGuURHDSDDgikZsTdZU1-L6CoJNGHMKmJ9i3ly-8xl2FQ6sXMXHgrn5oz4xmWbkhf3diqYn-gMZRJTkFYX-RG55zC_9x_knSLlQFOXepescoqs';

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.token}`
            }
        });

        return next.handle(req);

    }

}
