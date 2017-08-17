import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Modale1pagePage } from './modale1page';

@NgModule({
  declarations: [
    Modale1pagePage,
  ],
  imports: [
    IonicPageModule.forChild(Modale1pagePage),
  ],
  exports: [
    Modale1pagePage
  ]
})
export class Modale1pagePageModule {}
