import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vendedor} from '../model/Vendedor';
import {Venta} from '../model/Venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private httpClient: HttpClient) { }

  getVentasByMesAndVendedor(idVendedor: number, fechaInicio: Date, fechaFin: Date): Observable<Venta[]> {
    return this.httpClient.get<Venta[]>('/ventas/findbymesandvendedor/' + idVendedor + '/' + fechaInicio + '/' + fechaFin);
  }

  getVentasByMes(idMes: number): Observable<Venta[]> {
    return this.httpClient.get<Venta[]>('/ventas/findbymes/' + idMes);
  }


}
