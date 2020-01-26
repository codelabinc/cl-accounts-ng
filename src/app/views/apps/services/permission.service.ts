import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  _serviceName = 'permissions';
  constructor(private httpClient: HttpClient) {
  }

  addPermission(appCode: string, roleName: string, name: string): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/apps/${appCode}/roles/${roleName}/${this._serviceName}`, { name });
  }
  deletePermission(appCode: string, roleName: string, name: string): Observable<any> {
    return this.httpClient.delete<any>(`${environment.apiBaseUrl}/apps/${appCode}/roles/${roleName}/${this._serviceName}/${name}`);
  }
}
