import { HttpEventType, HttpHandler, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { AuthInterceptor } from "./auth-interceptor.service";

export class LoggingInterceptor implements AuthInterceptor {
    intercept(req: HttpRequest<any>,next: HttpHandler) {
        console.log(`Outgoing req ${req.url}`);
        return next.handle(req).pipe(tap(event=>{
            if(event.type === HttpEventType.Response) {
                console.log('Incoming response')
                console.log(event.body);
            }
        }));
    }
}