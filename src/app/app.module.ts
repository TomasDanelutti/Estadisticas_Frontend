import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomComponentsModule } from './modules/custom-components/custom-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import {CabeceraComponent} from './components/cabecera/cabecera.component';
import {MenuComponent} from './components/menu/menu.component';
import {ToolbarModule} from 'primeng/toolbar';
import {SlideMenuModule} from 'primeng/slidemenu';

@NgModule({
    declarations: [
        AppComponent,
        CabeceraComponent,
        MenuComponent
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        IonicStorageModule.forRoot(),
        BrowserAnimationsModule,
        CustomComponentsModule,
        ReactiveFormsModule,
        ToolbarModule,
        SlideMenuModule
    ],
    providers: [
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        StatusBar,
        SplashScreen,
    ],
    bootstrap: [AppComponent],
    exports: [
        CabeceraComponent,
        MenuComponent
    ]
})
export class AppModule {}
