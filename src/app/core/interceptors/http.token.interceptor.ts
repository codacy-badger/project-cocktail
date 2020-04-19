import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
	constructor() {
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const headersConfig = {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		};

		const token = '';

		if (token) {
			const key = 'Authorization';
			headersConfig[key] = `Token ${token}`;
		}

		const request = req.clone({setHeaders: headersConfig});
		return next.handle(request);
	}
}
