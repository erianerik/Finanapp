import { RegisterLoginPage } from '../home-login/register-login/register-login.page';
import { LoginPage } from '../home-login/login/login.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'register-login',
    loadChildren: () => import('../home-login/register-login/register-login.module').then(m => m.RegisterLoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
