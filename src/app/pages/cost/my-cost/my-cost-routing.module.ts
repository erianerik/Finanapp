import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCostPage } from './my-cost.page';

const routes: Routes = [
  {
    path: '',
    component: MyCostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCostPageRoutingModule {}
