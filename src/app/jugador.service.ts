import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  private apiUrl = 'http:localhost:3000/api/players';

  constructor(private http: HttpClient) { }

  getJugadores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
