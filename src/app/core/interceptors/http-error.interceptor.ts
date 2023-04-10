import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { catchError, EMPTY, Observable, retry } from 'rxjs';
import { HTTP_STATUS_CODE } from "@app-core/enums/http-error-code.enum";
import { RouterService } from "@app-core/services/router.service";
import { FALLBACK_ROUTES } from "@app-core/constants/navigation.const";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  private readonly RETRY_TIMES = 1;
  constructor(private readonly _routerService: RouterService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(this.RETRY_TIMES),
      catchError((e: HttpErrorResponse) => {
        const status: HTTP_STATUS_CODE = e.status;
        this._redirectToErrorPage(status);
        // TODO: Handle client errors
        return EMPTY;
      }),

    );
  }

  private _redirectToErrorPage(statusCode: HTTP_STATUS_CODE): void {
    this._routerService.openErrorPage(FALLBACK_ROUTES[statusCode]);
  }

}
