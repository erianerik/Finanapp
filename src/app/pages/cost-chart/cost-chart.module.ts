import { NavigationPage } from './../../navigation/navigation.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostChartPageRoutingModule } from './cost-chart-routing.module';

import { CostChartPage } from './cost-chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostChartPageRoutingModule
  ],
  declarations: [CostChartPage, NavigationPage]
})
export class CostChartPageModule {}
