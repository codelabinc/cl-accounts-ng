import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { WebHook, App } from '../../model/app-model';
import { WebhookService } from '../../services/webhook.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { AppsService } from '../../services/apps.service';

@Component({
  selector: 'app-app-web-hook',
  templateUrl: './app-web-hook.component.html',
  styleUrls: ['./app-web-hook.component.css']
})
export class AppWebHookComponent implements OnInit, OnDestroy {

  stop$ = new Subject();
  appCode: string;
  @Input() app: App;

  constructor(private webhookService: WebhookService,
    private snackBar: MatSnackBar,
    private appService: AppsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      takeUntil(this.stop$)
    ).subscribe(params => {
      this.appCode = params.code;
    })
  }

  onSubmit($event: WebHook) {
    if (this.app.webHook) {
      this.webhookService.updateWebHook(this.appCode, $event)
        .subscribe((it: App) => {
          this.appService.getByCode(this.appCode).subscribe(app => {
            this.app = app;
            this.snackBar.open('WebHook Updated', 'Dismiss');
          });
        }, err => {
          this.snackBar.open('Could not Update Webhook at the moment', 'Dismiss');
        })
    } else {
      this.webhookService.createWebHook(this.appCode, $event)
        .subscribe((it: App) => {
          this.appService.getByCode(this.appCode).subscribe(app => {
            this.app = app;
            this.snackBar.open('WebHook Updated', 'Dismiss');
          });
          this.snackBar.open('WebHook Created', 'Dismiss');
        }, err => {
          this.snackBar.open('Could not create Webhook at the moment', 'Dismiss');
        })
    }

  }

  getEventNotifications() {
    return this.app.events.map(it => {
      it.selected = true;
      return it;
    });
  }

  ngOnDestroy(): void {
    this.stop$.next();
    this.stop$.complete();
  }

}
