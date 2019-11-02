import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(loginService: LoginService) {}

  ngOnInit() {
    
  }

  enviar(ngForm: NgForm){
    console.log('email', this.login.email)
  } 

}

class Login {
  email:string = ''
  senha:string = ''
}
