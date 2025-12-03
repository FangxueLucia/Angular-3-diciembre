import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
switch = signal(false);
// Signal to track the current view state ('cats', 'champions', or 'all')
view = signal('cats');
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
}
