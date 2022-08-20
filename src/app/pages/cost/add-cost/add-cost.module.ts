import { NavigationPage } from './../../../navigation/navigation.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCostPageRoutingModule } from './add-cost-routing.module';

import { AddCostPage } from './add-cost.page';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCostPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicStorageModule
  ],
  declarations: [AddCostPage, NavigationPage]
})
export class AddCostPageModule { }
