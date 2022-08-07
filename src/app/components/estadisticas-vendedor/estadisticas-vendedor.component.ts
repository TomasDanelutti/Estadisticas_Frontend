import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Venta} from '../../model/Venta';

@Component({
  selector: 'app-estadisticas-vendedor',
  templateUrl: './estadisticas-vendedor.component.html',
  styleUrls: ['./estadisticas-vendedor.component.scss'],
})
export class EstadisticasVendedorComponent implements OnInit, OnChanges, OnDestroy {
  @Input() ventas: Venta[] = [];
  total = 0;
  cantProductos = 0;
  cantVentas = 0;
  constructor() { }

  ngOnInit() {
  }

  calcularEstadisticas() {
    this.ventas.forEach(venta => {
      this.cantVentas ++;
      this.total = this.total + venta.total;
      this.cantProductos = this.cantProductos + venta.cantProductos;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.ventas.currentValue) {
      this.cantVentas = 0;
      this.cantProductos = 0;
      this.total = 0;
      this.calcularEstadisticas();

    }
  }

  ngOnDestroy(): void {
    this.ventas = [];
    this.cantVentas = 0;
    this.cantProductos = 0;
    this.total = 0;
  }
}
