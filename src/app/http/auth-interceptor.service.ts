import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const modifiedReq = req.clone({headers:req.headers.append('auth-headers','Mod by auth-intereceptor')});
        return next.handle(modifiedReq);
    }

}