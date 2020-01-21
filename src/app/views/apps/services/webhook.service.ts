import { Injectable } from '@angular/core';
import { BaseService } from 'app/services/base.service';
import { WebHook, App } from '../model/app-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebhookService extends BaseService<WebHook> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient, 'webhook')
  }

  createWebHook(appCode: string, webhook: WebHook): Observable<App> {
    return this.httpClient.post<App>(`${environment.apiBaseUrl}/apps/${appCode}/${this._serviceName}`, webhook);
  }
  updateWebHook(appCode: string, webhook: WebHook): Observable<App> {
    return this.httpClient.put<App>(`${environment.apiBaseUrl}/apps/${appCode}/${this._serviceName}`, webhook);
  }
}
