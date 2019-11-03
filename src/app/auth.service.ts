import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Credencials } from './login/login.component';
import { environment as env } from '../environments/environment'

@Injectable()
export class AuthService {

  apiRoute: string = '/api/usuarios'

  constructor(private http: HttpClient) { }

  autenticar(credencials: Credencials){
    const url: string = `${env.apiBaseUrl}${this.apiRoute}`
    return this.http.post<JSON>(url,credencials);
  }
  
}
