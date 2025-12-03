import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsolaService {
  saludo = "Hola a todos"; //esto es una variable

  imprimir() { // esto es un método
    console.log(this.saludo);
  }
}