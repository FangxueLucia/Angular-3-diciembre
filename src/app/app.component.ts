import { Component, signal } from '@angular/core';
import { ConsolaService } from './service/consola.service';
import {HijoComponent} from './components/hijo/hijo.component'; // Importa el componente hijo para poder usarlo en este componente
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HijoComponent, FormsModule], // Importa el componente hijo para que pueda ser usado en el template (HTML) de este componente
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
switch = signal(false);
// Signal to track the current view state ('cats', 'champions', or 'all')
view = signal('cats');
saludo: string;

constructor(private consolaService: ConsolaService) {
  this.saludo = this.consolaService.saludo;
}



arreglo = signal([
  'Paprika',
  'Griffith',
  'Colette',
  'Sirius'
])
objeto = signal([
  {
    titulo: 'Seraphine',
    imagen: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg'
  },
  {
    titulo: 'Soraka',
    imagen: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg'
  }
])
username: string= '';
password: string= '';
saludar() {
  console.log(this.saludo);
}
imprimir() {
  this.consolaService.imprimir();
}
submitForm(event: Event) {
  event.preventDefault();

  console.log('Formulario enviado');
  console.log(this.username, this.password);
}
}
