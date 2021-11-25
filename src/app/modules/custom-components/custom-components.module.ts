import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PrimeNgModule} from '../primeng/primeng.module';

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        PrimeNgModule,
    ],
    exports: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CustomComponentsModule {
}
