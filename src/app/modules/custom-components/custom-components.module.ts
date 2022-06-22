import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PrimeNgModule} from '../primeng/primeng.module';
import {CabeceraComponent} from '../../components/cabecera/cabecera.component';
import {MenuComponent} from '../../components/menu/menu.component';
import {TablaCursosComponent} from '../../components/tabla-cursos/tabla-cursos.component';

;
@NgModule({
    declarations: [
        TablaCursosComponent,
        CabeceraComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        PrimeNgModule,
    ],
    exports: [
        TablaCursosComponent,
        CabeceraComponent,
        MenuComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CustomComponentsModule {
}
