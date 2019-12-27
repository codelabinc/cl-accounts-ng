import { Directive, ComponentRef, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, ContentChild, ElementRef, Renderer2, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormField, MatInput } from '@angular/material';
import { CustomErrorComponent } from '../components/custom-error/custom-error.component';

export const defaultErrors = {
  minlength: ({ requiredLength, actualLength }) =>
    `Expected ${requiredLength} characters but got ${actualLength}`,
  email: () => 'Email is Invalid',
  error: error => error,
  required: () => `This field is required`
};

@Directive({
  selector: '[formControl], [formControlName]'
})
export class ControlErrorsDirective implements AfterViewInit {

  ref: ComponentRef<CustomErrorComponent>;
  control: NgControl;
  @Input() customErrors = {};
  @ContentChild(MatInput, { read: ElementRef, static: true }) controlElementRef: ElementRef;
  constructor(
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private formField: MatFormField,
    private renderer: Renderer2  ) { }

  public ngAfterViewInit() {
    this.control = this.formField._control.ngControl;
    this.renderer.listen(this.controlElementRef.nativeElement, "blur", () =>
      this.onChange()
    );
    this.control.statusChanges.subscribe(res => this.onChange());
  }

  public onChange() {
    if (this.control.invalid && this.control.touched) {
      let error: string = `Invalid ${this.formField._control.ngControl.name}`
      Object.keys(defaultErrors).forEach(k => {
        console.log(k, this.control.hasError(k), this.control.errors[k])
        if (this.control.hasError(k)) error = defaultErrors[k](this.control.errors[k]);
      });
      this.setError(error);
    } else this.setError("");
  }
  
  setError(text: string) {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(CustomErrorComponent);
      this.formField._elementRef;
      this.ref = this.vcr.createComponent(factory);
    }
    this.ref.instance.error = text;
  }
}
