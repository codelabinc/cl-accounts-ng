import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from '../model/user';
import { AuthenticationService } from '../views/sessions/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private loggedInUser: User;
  constructor(authenticationService: AuthenticationService) {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(authenticationService.getToken());
    this.buildUser(decodedToken);
  }

  private buildUser(decodedToken: any) {
    this.loggedInUser = new User();
    this.loggedInUser.fullName = decodedToken.ufn;
    this.loggedInUser.accountName = decodedToken.acn;
    this.loggedInUser.accountCode = decodedToken.acc;
    this.loggedInUser.roles = decodedToken.rls;
    this.loggedInUser.permissions = decodedToken.pms;
    this.loggedInUser.id = decodedToken.sub;
  }

  getLoggedInUser(): User {
    return this.loggedInUser;
  }
}
