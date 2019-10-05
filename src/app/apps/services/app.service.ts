import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'app/services/base.service';
import { App } from 'app/model/app';

@Injectable({
  providedIn: 'root'
})
export class AppService extends BaseService<App> {

  serviceName = 'accounts';

  constructor(protected http: HttpClient) {
    super(http, 'accounts');
   }
}
