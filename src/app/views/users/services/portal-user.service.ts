import { Injectable } from '@angular/core';
import { BaseService } from '../../../services/base.service';
import { PortalUser } from '../model/user-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortalUserService  extends BaseService<PortalUser>{

  constructor(protected httpClient: HttpClient) { 
    super(httpClient, 'users')
  }
}
