import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material';
import { CustomErrorComponent } from './components/custom-error/custom-error.component';
import { ControlErrorsDirective } from './directives/control-errors.directive';
import { ControlErrorContainerDirective } from './directives/control-error-container.directive';
import { FormSubmitDirective } from './directives/form-submit.directive';



@NgModule({
  declarations: [CustomErrorComponent,
  ControlErrorsDirective, ControlErrorContainerDirective, FormSubmitDirective],
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  exports: [
    CustomErrorComponent, ControlErrorsDirective, ControlErrorContainerDirective, FormSubmitDirective
  ],
  entryComponents: [CustomErrorComponent],
})
export class ControlErrorModule { }
