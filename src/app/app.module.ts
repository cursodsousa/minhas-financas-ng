import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';

import { HttpClientModule } from '@angular/common/http'

const baseApiUrl:string = "https://minhas-financas-app.herokuapp.com/";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
    LoginService ,
    { provide : 'baseApiUrl', useValue: baseApiUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
