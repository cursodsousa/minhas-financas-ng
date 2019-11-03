import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private localStorageService: LocalstorageService) { }
}
