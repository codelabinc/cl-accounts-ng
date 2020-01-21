import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Page } from 'app/model/page/page';
​
export class BaseService<T> {
​
  protected _serviceName;
​
  constructor(protected http: HttpClient, serviceName: string) {
    this._serviceName = serviceName;
   }
​
  create(data: T): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/${this._serviceName}`, data);
  }
​
  patch(data: T): Observable<any> {
    return this.http.patch(`${environment.apiBaseUrl}/${this._serviceName}`, data);
  }
​
  search<R>(filter: any) {
    return this.http.get<Page<T>>(`${environment.apiBaseUrl}/${this._serviceName}`, {
      params: filter
    });
  }
​
  getByCode(code: string): Observable<T> {
    return this.http.get<T>(`${environment.apiBaseUrl}/${this._serviceName}/${code}`);
  }
​
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/${this._serviceName}/${id}`);
  }
}