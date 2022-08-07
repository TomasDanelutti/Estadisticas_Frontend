import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPageRoutingModule } from './productos-routing.module';

import { ProductosPage } from './productos.page';
import {PrimeNgModule} from '../../../modules/primeng/primeng.module';
import {CustomComponentsModule} from '../../../modules/custom-components/custom-components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductosPageRoutingModule,
        PrimeNgModule,
        CustomComponentsModule,
    ],
  declarations: [ProductosPage]
})
export class ProductosPageModule {}
