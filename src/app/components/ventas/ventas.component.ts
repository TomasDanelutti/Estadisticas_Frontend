import {Component, Input, OnInit} from '@angular/core';
import {Venta} from '../../model/Venta';
import {Store} from '@ngxs/store';
import {Router} from '@angular/router';
import {SetVentaAction} from '../../state/venta.state';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss'],
})
export class VentasComponent implements OnInit {
  @Input() ventas: Venta[];
  constructor(
      private store: Store,
      private router: Router) { }

  ngOnInit() {
  }

    masInformacion(venta: Venta) {
    this.store.dispatch(new SetVentaAction(venta));
    this.router.navigate(['/estadisticas/productos'], {replaceUrl: true});
    }
}
