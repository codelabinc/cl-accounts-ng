import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { environment } from 'environments/environment';
import { Country, State } from '../model/master-records';
import { EventNotification } from 'app/views/apps/model/app-model';

@Injectable({
  providedIn: 'root'
})
export class MasterRecordService {

  private serviceName = 'master-records';

  constructor(private httpClient: HttpClient) {
  }

  getCountries(filter: any) {
    return this.httpClient.get<Country[]>(`${environment.apiBaseUrl}/${this.serviceName}/countries`, {
      params: filter
    });
  }

  getStates(filter: any) {
    return this.httpClient.get<State[]>(`${environment.apiBaseUrl}/${this.serviceName}/states`, {
      params: filter
    });
  }

  getEventNotificationTypes() {
    return this.httpClient.get<EventNotification[]>(`${environment.apiBaseUrl}/${this.serviceName}/event-notification-types`);
  }

  getAccountTypes(filter: any) {
    return this.httpClient.get<string[]>(`${environment.apiBaseUrl}/${this.serviceName}/account-types`, {
      params: filter
    });
  }
}
