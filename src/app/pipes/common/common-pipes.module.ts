import { NgModule } from '@angular/core';
import { RelativeTimePipe } from './relative-time.pipe';
import { ExcerptPipe } from "./excerpt.pipe";
import { UnderscoreToSpacePipe } from './underscore-to-space.pipe';
@NgModule({
  declarations: [
    RelativeTimePipe,
    ExcerptPipe,
    UnderscoreToSpacePipe,
  ],
  exports: [
    RelativeTimePipe,
    ExcerptPipe,
    UnderscoreToSpacePipe
  ]
})
export class CommonPipesModule { }