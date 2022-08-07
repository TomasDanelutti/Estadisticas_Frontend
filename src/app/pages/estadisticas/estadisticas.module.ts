import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadisticasPageRoutingModule } from './estadisticas-routing.module';

import { EstadisticasPage } from './estadisticas.page';
import {PrimeNgModule} from '../../modules/primeng/primeng.module';
import {CustomComponentsModule} from '../../modules/custom-components/custom-components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EstadisticasPageRoutingModule,
        PrimeNgModule,
        CustomComponentsModule,
        ReactiveFormsModule
    ],
  declarations: [EstadisticasPage]
})
export class EstadisticasPageModule {}
