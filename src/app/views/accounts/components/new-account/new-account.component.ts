import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { AccountFormComponent } from '../account-form/account-form.component';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponse } from 'selenium-webdriver/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  working = false;

  constructor(private accountsService: AccountsService, private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit($event) {
    console.log($event);
    this.working = true;
    this.accountsService.create($event).pipe(
    ).subscribe(() => {
      this.working = false;
      this.snackBar.open('Account Created Successfully', 'Dismiss');
      this.router.navigate(['/accounts']);
    }, err => {
      this.working = false;
    });
  }

}
