import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'jebamo/loader';
import { JeModelDirective } from './je-model.directive';

@NgModule({
  imports: [],
  declarations: [...DIRECTIVES, JeModelDirective],
  exports: [...DIRECTIVES, JeModelDirective],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true
    }
  ]
})
export class JebamoModule {}