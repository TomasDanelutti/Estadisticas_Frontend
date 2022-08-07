import {Component, OnInit} from '@angular/core';
import {VentasService} from '../../services/ventas.service';
import {Venta} from '../../model/Venta';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ResetVenta} from '../../state/venta.state';
import {Store} from '@ngxs/store';
import {Router} from '@angular/router';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit{
  ventas: Venta[] = [];
  formulario: FormGroup;
  fechaInicio: Date;
  fechaFin: Date;
  constructor(
      private ventaService: VentasService,
      private formBuilder: FormBuilder,
      private store: Store,
      private router: Router) { }


  ngOnInit() {
    this.formulario = this.formBuilder.group({
      mes: [],
      vendedor: [],
    });
  }

  ionViewWillEnter() {
    this.store.dispatch(new ResetVenta());
  }

  buscar() {
    this.fechaInicio = new Date(this.formulario.controls.mes.value.primerDia);
    this.fechaFin = new Date(this.formulario.controls.mes.value.ultimoDia);
    if (this.formulario.controls.vendedor.value) {
      this.ventaService.getVentasByMesAndVendedor(this.formulario.controls.vendedor.value.idVendedor, this.fechaInicio, this.fechaFin).subscribe(
              value => {
                this.ventas = value;
              });
    } else {
      this.ventaService.getVentasByMes(this.formulario.controls.mes.value.idMes).subscribe(
          value => this.ventas = value);hiih
    }
  }

  volver() {
    this.router.navigate(['/home'], {replaceUrl: true});
  }

}
