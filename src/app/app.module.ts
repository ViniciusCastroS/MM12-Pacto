import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Login } from './login/login.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { VouchersComponent } from './vouchers/vouchers.component';




@NgModule({
  declarations: [
    AppComponent,
    Login,
    FrontPageComponent,
    VouchersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
