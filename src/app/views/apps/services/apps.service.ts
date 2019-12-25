import { Injectable } from '@angular/core';
import { BaseService } from 'app/services/base.service';
import { HttpClient } from '@angular/common/http';
import { App, AppStatistics } from '../model/app-model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppsService extends BaseService<App> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient, 'apps')
  }

  getStatistics(appCode: string): Observable<AppStatistics> {
    return this.httpClient.get<AppStatistics>(`${environment.apiBaseUrl}/${this._serviceName}/${appCode}/statistics`)
  }
}
