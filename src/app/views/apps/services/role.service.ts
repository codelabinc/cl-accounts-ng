import { Injectable } from '@angular/core';
import { BaseService } from 'app/services/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends BaseService<string> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient, 'roles')
  }

  createRole(appCode: string, name: string): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/apps/${appCode}/${this._serviceName}`, name);
  }
  deleteRole(appCode: string, name: string): Observable<any> {
    return this.httpClient.delete<any>(`${environment.apiBaseUrl}/apps/${appCode}/${this._serviceName}/${name}`);
  }
}
