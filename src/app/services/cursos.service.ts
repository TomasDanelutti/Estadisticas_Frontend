import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from '../model/Usuario';
import {Curso} from '../model/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient: HttpClient) { }

  getCursos(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>('http://localhost:8081/curso');
  }
}
