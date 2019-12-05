import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as domHelper from '../../../helpers/dom.helper';
import { ThemeService } from '../../../services/theme/theme.service';
import { AppConfirmService } from '../../../services/app-confirm/app-confirm.service';
import { AuthenticationService } from '../../../views/sessions/services/authentication.service';
import { UserService } from '../../../services/user.service';
import { User } from 'app/model/user';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.template.html'
})
export class TopbarComponent implements OnInit {
  @Input() sidenav;
  @Input() notificPanel;
  @Output() onLangChange = new EventEmitter<any>();
  currentLang = 'en';
  availableLangs = [{
    name: 'English',
    code: 'en',
  }, {
    name: 'Spanish',
    code: 'es',
  }]
  egretThemes;
  loggedInUser: User;

  constructor(private themeService: ThemeService,
    private appConfirmService: AppConfirmService,
    private authenticationService: AuthenticationService,
    private userService: UserService) { }
  ngOnInit() {
    this.egretThemes = this.themeService.egretThemes;
    this.loggedInUser = this.userService.getLoggedInUser();
  }
  setLang() {
    this.onLangChange.emit(this.currentLang);
  }
  changeTheme(theme) {
    this.themeService.changeTheme(theme);
  }
  toggleNotific() {
    this.notificPanel.toggle();
  }
  toggleSidenav() {
    this.sidenav.toggle();
  }
  toggleCollapse() {
    let appBody = document.body;
    domHelper.toggleClass(appBody, 'collapsed-menu');
    domHelper.removeClass(document.getElementsByClassName('has-submenu'), 'open');
  }

  onSignOutClick() {
    this.appConfirmService.confirm('Confirm your Action', 'Are you Sure you want to Sign out?').subscribe(response => {
      if(response) {
        this.authenticationService.logout();
      }
    })

  }

}