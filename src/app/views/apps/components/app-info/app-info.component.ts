import { Component, OnInit, Input } from '@angular/core';
import { AppsService } from '../../services/apps.service';
import { App, AppStatistics } from '../../model/app-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.css']
})
export class AppInfoComponent implements OnInit {

  @Input() app: App;

  appStatistics$: Observable<AppStatistics>;
  constructor(private appService: AppsService) { }

  ngOnInit() {
    this.appStatistics$ = this.appService.getStatistics(this.app.code);
  }

}
