import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenHelper } from '../Helpers/TokenHelper';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenHelper: TokenHelper) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.tokenHelper.getToken();
    if (!token) {
      console.log("No token");
      return next.handle(request);
    }

    const clonedRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });
    return next.handle(clonedRequest);
  }
}
