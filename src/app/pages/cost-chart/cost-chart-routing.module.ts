import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostChartPage } from './cost-chart.page';

const routes: Routes = [
  {
    path: '',
    component: CostChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostChartPageRoutingModule {}
