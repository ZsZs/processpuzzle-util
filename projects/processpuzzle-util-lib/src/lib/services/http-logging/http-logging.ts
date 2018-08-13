import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { NGXLogger } from 'ngx-logger';

@Injectable()
export class HttpLoggingInterceptor implements HttpInterceptor {

   constructor( private logger: NGXLogger ) {}

   public intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
     const startTime = Date.now();
     let status: string;

     return next.handle( req ).pipe(
       tap(
         event => {
           status = '';
           if (event instanceof HttpResponse) {
             status = 'succeeded';
           }
         },
         error => status = 'failed'
       ),
       finalize(() => {
         const elapsedTime = Date.now() - startTime;
         const message = req.method + ' ' + req.urlWithParams + ' ' + status + ' in ' + elapsedTime + 'ms';
         console.log( message );
         this.logDetails(message);
       })
     );
   }

   private logDetails( msg: string) {
      this.logger.info( msg );
   }
}
