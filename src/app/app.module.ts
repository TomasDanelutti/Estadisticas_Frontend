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
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import {environment} from '../environments/environment';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {states} from './state/app';

@NgModule({
    declarations: [
        AppComponent,
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        NgxsModule.forRoot(states, {developmentMode: !environment.production}),
        NgxsStoragePluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot({disabled: environment.production}),
        CustomComponentsModule,
        BrowserAnimationsModule
    ],
    providers: [
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        StatusBar,
        SplashScreen,
    ],
    bootstrap: [AppComponent],
    exports: [
    ]
})
export class AppModule {}
