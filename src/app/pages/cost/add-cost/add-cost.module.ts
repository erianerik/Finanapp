import { NavigationPage } from './../../../navigation/navigation.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCostPageRoutingModule } from './add-cost-routing.module';

import { AddCostPage } from './add-cost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCostPageRoutingModule
  ],
  declarations: [AddCostPage, NavigationPage]
})
export class AddCostPageModule { }
