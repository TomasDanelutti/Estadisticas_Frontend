import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

    rutasMenu: MenuItem[];

    constructor(private router: Router) {
    }

    ngOnInit() {

        this.rutasMenu = [
            {label: 'Home', icon: 'pi pi-home', routerLink: '/home'},
            {label: 'Cursos', icon: 'pi pi-search', routerLink: '/cursos'},
            {label: 'Salir', icon: 'pi pi-book', routerLink: '/login'},
        ];
    }
}
