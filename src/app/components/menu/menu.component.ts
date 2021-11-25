import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

    rutas: MenuItem[];
    viewportHeight: number;

    constructor(private router: Router) {
    }

    ngOnInit() {

        this.viewportHeight = 350; // altura del menú cuando tiene "Búsquedas externas" y "Sección privada"
        // this.viewportHeight = 177;

        this.rutas = [
            {label: 'Home', icon: 'pi pi-home', routerLink: '/home'},
            {label: 'Estadisticas', icon: 'pi pi-search', routerLink: '/estadisticas'},
            {label: 'Salir', icon: 'pi pi-book', routerLink: '/login'},
        ];
    }
}
