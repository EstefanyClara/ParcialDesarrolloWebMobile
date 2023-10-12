import { Component, OnInit } from '@angular/core';
import { Jugador } from '../jugador';
import { JugadorService } from '../jugador.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit{
  jugadores: Jugador[]=[];

  constructor(private jugadorService:JugadorService ) { }

  ngOnInit(): void {
      this.jugadorService.getJugadores().subscribe(data=>{
        this.jugadores = data;
      });
  }

  
}
