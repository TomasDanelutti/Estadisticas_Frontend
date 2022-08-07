import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import {Store} from '@ngxs/store';
import {ResetUsuario} from '../../state/usuarioLogueado.state';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

    rutasMenu: MenuItem[];

    constructor(
        private router: Router,
        private store: Store) {
    }

    ngOnInit() {

        this.rutasMenu = [
            {label: 'Home', icon: 'pi pi-home', routerLink: '/home'},
            {label: 'Estadisticas', icon: 'pi pi-search', routerLink: '/estadisticas'},
            {label: 'Salir', icon: 'pi pi-sign-out', command: () => {
                    this.store.dispatch(new ResetUsuario());
                    this.router.navigate(['/login'], {replaceUrl: true});
                } },
        ];
    }
}
