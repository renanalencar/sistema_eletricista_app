import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuEletricistaPage } from './menu-eletricista';
import { ExpandableComponent} from '../../components/expandable/expandable';

@NgModule({
  declarations: [
    MenuEletricistaPage,
    ExpandableComponent
  ],
  imports: [
    IonicPageModule.forChild(MenuEletricistaPage),
  ],
  entryComponents: [
    MenuEletricistaPage
  ]
})
export class MenuEletricistaPageModule {}
