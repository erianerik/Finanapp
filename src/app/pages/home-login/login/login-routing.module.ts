import { RegisterLoginPage } from '../register-login/register-login.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'register-login',
    component: RegisterLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule { }
