import { Component, OnInit } from '@angular/core';
import { AppsService } from '../../services/apps.service';
import { App } from '../../model/app-model';
import { ActivatedRoute } from '@angular/router';
import { takeUntil, map } from 'rxjs/operators';
import { Subject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-app-configuration',
  templateUrl: './app-configuration.component.html',
  styleUrls: ['./app-configuration.component.css']
})
export class AppConfigurationComponent implements OnInit {

  app$: Observable<App>;
  stop$ = new Subject();

  constructor(private appService: AppsService,
    private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.pipe(takeUntil(this.stop$))
      .subscribe(params => {
        const code = params.code;
        this.app$ = this.appService.getByCode(code);
      });
  }

  handleDataChange($event: App) {
    console.log($event);
    this.app$ = of($event);
  }


}
