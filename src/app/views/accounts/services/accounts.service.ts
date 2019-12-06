import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../../services/base.service';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountsService extends BaseService<Account> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient, 'accounts')
  }

}
