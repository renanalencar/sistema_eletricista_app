import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IniciarServicoPage } from './iniciar-servico';

@NgModule({
  declarations: [
    IniciarServicoPage,
  ],
  imports: [
    IonicPageModule.forChild(IniciarServicoPage),
  ],
})
export class IniciarServicoPageModule {}
