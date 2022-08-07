import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vendedor} from '../model/Vendedor';
import {Mes} from '../model/Mes';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private httpClient: HttpClient) { }

  getVendedores(): Observable<Vendedor[]> {
    return this.httpClient.get<Vendedor[]>('/vendedores');
  }

}
