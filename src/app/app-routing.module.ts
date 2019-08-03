import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login } from './login/login.component'
import { FrontPageComponent } from './front-page/front-page.component';
import { VouchersComponent } from './vouchers/vouchers.component';

const routes: Routes = [
  {
    path: '', component: FrontPageComponent
  },
  {
    path: 'login/oticas', component: Login
  },
  {
    path: 'login/solution', component: Login
  },
  {
    path: 'login/laboratorio', component: Login
  },{
    path: 'vouchers', component: VouchersComponent
  },
  {
    path: 'frontComponent', component: FrontPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
