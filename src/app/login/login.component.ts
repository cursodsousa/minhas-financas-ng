import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalstorageService } from '../localstorage.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  login: Credencials = new Credencials();

  constructor(
    private authService: AuthService,
    private storageService: LocalstorageService
  ){}

  ngOnInit() {
    
  }

  enviar(ngForm: NgForm){
    const onSuccess = (data:any) => {
      this.storageService.add('_usuario_logado', data)
    }

    this.authService
      .autenticar(this.login)
      .subscribe(onSuccess , error => console.log(error) )
  } 

}

export class Credencials {
  email:string = ''
  senha:string = ''
}
