import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Curso} from '../model/Curso';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  constructor(private httpClient: HttpClient) { }

  getCursosByUsuario(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>('http://localhost:8081/inscripcion/');
  }
}
