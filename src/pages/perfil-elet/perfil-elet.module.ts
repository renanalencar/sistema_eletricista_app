import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilEletPage } from './perfil-elet';

@NgModule({
  declarations: [
    PerfilEletPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilEletPage),
  ],
})
export class PerfilEletPageModule {}
