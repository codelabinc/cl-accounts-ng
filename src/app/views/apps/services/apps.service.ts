import { Injectable } from '@angular/core';
import { BaseService } from 'app/services/base.service';
import { HttpClient } from '@angular/common/http';
import { App } from '../model/app-model';

@Injectable({
  providedIn: 'root'
})
export class AppsService extends BaseService<App> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient, 'apps')
  }
}
