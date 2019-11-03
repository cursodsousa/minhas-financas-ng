import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  add(key: string, value: any){
    localStorage.setItem(key, value);
  }
}
