import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IniciarServicoElePage } from './iniciar-servico-ele';

@NgModule({
  declarations: [
    IniciarServicoElePage,
  ],
  imports: [
    IonicPageModule.forChild(IniciarServicoElePage),
  ],
})
export class IniciarServicoElePageModule {}
