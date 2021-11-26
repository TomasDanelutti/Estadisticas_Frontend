import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./pages/estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule)
  },
    {path: '', redirectTo: 'buscar-cv', pathMatch: 'full'},
    {path: '**', redirectTo: 'buscar-cv', pathMatch: 'full'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
