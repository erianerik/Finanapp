import { NavigationPage } from './../../../navigation/navigation.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCostPageRoutingModule } from './my-cost-routing.module';

import { MyCostPage } from './my-cost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCostPageRoutingModule
  ],
  declarations: [MyCostPage, NavigationPage]
})
export class MyCostPageModule {}
