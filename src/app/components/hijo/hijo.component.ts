import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo', // Nombre del selector para usar este componente en otros templates (como <app-hijo></app-hijo>)
  imports: [], // Lista de dependencias (módulos, componentes, directivas) que usa este componente. Está vacío porque no usa nada externo por ahora.
  templateUrl: './hijo.component.html', // Ruta al archivo HTML que define la vista de este componente
  styleUrl: './hijo.component.css', // Ruta al archivo CSS que define los estilos de este componente
})
export class HijoComponent { // La clase donde se define la lógica del componente

}
