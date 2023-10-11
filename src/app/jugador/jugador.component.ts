import { Component } from '@angular/core';
import { JUGADOR } from '../lista-jugadores';
@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent {
  jugadores= JUGADOR;
}
