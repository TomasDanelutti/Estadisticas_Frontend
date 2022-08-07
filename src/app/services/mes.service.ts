import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Mes} from '../model/Mes';

@Injectable({
  providedIn: 'root'
})
export class MesService {

  constructor(private httpClient: HttpClient) { }

  getMeses(): Observable<Mes[]> {
    return this.httpClient.get<Mes[]>('/meses');
  }
}
