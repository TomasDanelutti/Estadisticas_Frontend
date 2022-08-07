import {Component, OnDestroy, OnInit} from '@angular/core';
import {Producto} from '../../model/Producto';
import {Select} from '@ngxs/store';
import {VentaState} from '../../state/venta.state';
import {Observable} from 'rxjs';
import {Venta} from '../../model/Venta';

@Component({
  selector: 'app-productos-venta',
  templateUrl: './productos-venta.component.html',
  styleUrls: ['./productos-venta.component.scss'],
})
export class ProductosVentaComponent implements OnInit, OnDestroy {
  @Select(VentaState.getVenta) ventaState: Observable<Venta>;
  productos: Producto[] = [];
  constructor() { }

  ngOnInit() {
    this.ventaState.subscribe(value => {
      // @ts-ignore
      this.productos = value?.productos;
    });
  }

  ngOnDestroy(): void {
    this.productos = [];
  }

}
