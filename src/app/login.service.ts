import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,  @Inject('baseApiUrl') baseApiUrl:string ) {
    console.log(baseApiUrl)
  }
  
}
