import { NgModule } from '@angular/core';
import { JeCardComponent } from './components/je-card/je-card.component';
import { JeToolbarComponent } from './components/je-toolbar/je-toolbar.component';
import { JeButtonComponent } from './components/je-button/je-button.component';



@NgModule({
  declarations: [
    JeButtonComponent,
    JeCardComponent,
    JeToolbarComponent
  ],
  imports: [
  ],
  exports: [
    JeButtonComponent,
    JeCardComponent,
    JeToolbarComponent
  ]
})
export class JebamoModule { }
