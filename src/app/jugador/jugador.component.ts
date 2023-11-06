import { Component, OnInit } from '@angular/core';
import { Jugador } from '../jugador';
import { JugadorService } from '../jugador.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  jugadores: Jugador[] = [];

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
    this.getJugadores();
  }

  getJugadores(): void {
    this.jugadorService.getJugadores()
      .subscribe(jugadores => this.jugadores = jugadores);
  }

  add(nombre: string): void {
    nombre = nombre.trim();
    this.jugadorService.addJugador({ nombre } as Jugador)
      .subscribe(jugador => {
        this.jugadores.push(jugador);
      });
  }
}

