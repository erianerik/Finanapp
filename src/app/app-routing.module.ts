import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home-login/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/home-login/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register-login',
    loadChildren: () => import('./pages/home-login/register-login/register-login.module').then(m => m.RegisterLoginPageModule)
  },
  {
    path: 'home-app',
    loadChildren: () => import('./pages/home-logged/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./navigation/navigation.module').then(m => m.NavigationPageModule)
  },
  {
    path: 'my-cost',
    loadChildren: () => import('./pages/cost/my-cost/my-cost.module').then(m => m.MyCostPageModule)
  },
  {
    path: 'add-cost',
    loadChildren: () => import('./pages/cost/add-cost/add-cost.module').then( m => m.AddCostPageModule)
  },  {
    path: 'cost-chart',
    loadChildren: () => import('./pages/cost-chart/cost-chart.module').then( m => m.CostChartPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
