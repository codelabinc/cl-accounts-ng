import { Directive, ComponentRef, ViewContainerRef, ComponentFactoryResolver, Input, Inject, Optional, Host } from '@angular/core';
import { NgControl } from '@angular/forms';
import { CustomErrorComponent } from '../components/custom-error/custom-error.component';
import { Observable, EMPTY, merge } from 'rxjs';
import { ControlErrorContainerDirective } from './control-error-container.directive';
import { FORM_ERRORS } from 'app/validators/form-errors';
import { FormSubmitDirective } from './form-submit.directive';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Directive({
  selector: '[formControl], [formControlName]'
})
export class ControlErrorsDirective {

  ref: ComponentRef<CustomErrorComponent>;
  container: ViewContainerRef;
  submit$: Observable<Event>;
  @Input() customErrors = {};

  constructor(
    vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    @Optional() controlErrorContainer: ControlErrorContainerDirective,
    @Inject(FORM_ERRORS) private errors,
    @Optional() @Host() private form: FormSubmitDirective,
    private controlDir: NgControl) {
    this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  ngOnInit() {
    merge(
      this.submit$,
      this.control.valueChanges
    ).pipe(
      untilDestroyed(this)).subscribe((v) => {
        const controlErrors = this.control.errors;
        if (controlErrors) {
          const firstKey = Object.keys(controlErrors)[0];
          const getError = this.errors[firstKey];
          const text = this.customErrors[firstKey] || getError(controlErrors[firstKey]);
          this.setError(text);
        } else if (this.ref) {
          this.setError(null);
        }
      })
  }

  get control() {
    return this.controlDir.control;
  }

  setError(text: string) {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(CustomErrorComponent);
      this.ref = this.container.createComponent(factory);
    }
    this.ref.instance.message = text;
  }

  ngOnDestroy() { }

}
