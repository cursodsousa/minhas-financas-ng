import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import { AuthService } from './auth.service';
import { NavbarComponent } from './navbar/navbar.component';

const baseApiUrl:string = "https://minhas-financas-app.herokuapp.com/";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ 
    AuthService ,
    { provide : 'baseApiUrl', useValue: baseApiUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
