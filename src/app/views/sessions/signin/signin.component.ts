import { Component, OnInit, ContentChild, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { takeUntil, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { LoginResponse } from '../model/login-model';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar, {static: false}) progressBar !: MatProgressBar;
  @ViewChild(MatButton, {static: false}) submitButton !: MatButton;


  signinForm: FormGroup;
  stop$ = new Subject();

  constructor(private authenticationService: AuthenticationService,
    private router: Router, private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      identifier: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    })
  }

  signin() {
    const signinData = this.signinForm.value
    console.log(signinData);
    this.progressBar.mode = 'indeterminate';
    this.authenticationService.login(this.signinForm.value)
    .pipe(
      takeUntil(this.stop$)
    )
    .subscribe((response: LoginResponse) => {
      this.submitButton.disabled = true;
      console.log(response);
      localStorage.setItem('cl_token', response.token);
      this.route.queryParams.subscribe(params => {
        const returnUrl = params['returnUrl'];
        if (returnUrl) {
          this.router.navigate([returnUrl]);
        } else {
          this.router.navigate(['dashboard']);
        }
      })
    });
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
        if(error.status === 400) {
          console.log(error);
          this.snackBar.open('just Hello', 'saying hello');

          // let snackBarRef = this.snackBar.open(error.message, error.error);
      
        }
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
