import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PrimeNgModule} from '../primeng/primeng.module';
import {CabeceraComponent} from '../../components/cabecera/cabecera.component';
import {MenuComponent} from '../../components/menu/menu.component';
import {MesComponent} from '../../components/mes/mes.component';
import {VendedorComponent} from '../../components/vendedor/vendedor.component';
import {VentasComponent} from '../../components/ventas/ventas.component';
import {ProductosVentaComponent} from '../../components/productos-venta/productos-venta.component';
import {EstadisticasVendedorComponent} from '../../components/estadisticas-vendedor/estadisticas-vendedor.component';

;

;
@NgModule({
    declarations: [
        CabeceraComponent,
        MenuComponent,
        MesComponent,
        VendedorComponent,
        VentasComponent,
        ProductosVentaComponent,
        EstadisticasVendedorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        PrimeNgModule,
    ],
    exports: [
        CabeceraComponent,
        MenuComponent,
        MesComponent,
        VendedorComponent,
        VentasComponent,
        ProductosVentaComponent,
        EstadisticasVendedorComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CustomComponentsModule {
}
