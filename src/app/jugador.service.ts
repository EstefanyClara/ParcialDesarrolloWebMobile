import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Jugador } from './jugador';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  [x: string]: any;
  private apiUrl = 'http://localhost:3000/jugador';

  constructor(private http: HttpClient) { }

  getJugadores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
    
  }
  addJugador(jugador: Jugador): Observable<Jugador>{
    return this.http.post<Jugador>(this.apiUrl, jugador)
    ;
    
  }
 
}