import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequisicaoService {
  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}${url}`);
  }

  post(url: string, params: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}${url}`, params);
  }

  put(
    url: string,
    body: any | null,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      context?: HttpContext;
      observe?: 'body' | 'response' | 'events';
      params?:
        | HttpParams
        | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
          };
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    }
  ): Observable<any> {
    // Configurando os parâmetros da solicitação PUT
    const requestOptions: any = {
      body: body,
      ...options,
    };

    if (!requestOptions.headers) {
      requestOptions.headers = new HttpHeaders();
    }

    // Enviando a solicitação PUT com os parâmetros fornecidos
    return this.http.put(`${environment.apiUrl}${url}`, requestOptions.body, requestOptions);
  }

  delete(url: string, params?: any): Observable<any> {
    // Configurando os parâmetros da solicitação DELETE
    const options = {
      params: new HttpParams({ fromObject: params })??{},
    };

    // Enviando a solicitação DELETE com os parâmetros fornecidos
    return this.http.delete(`${environment.apiUrl}${url}`, options);
  }
}
