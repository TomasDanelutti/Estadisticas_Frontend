import {UsuarioLogueadoModel, UsuarioLogueadoState} from './usuarioLogueado.state';
import {VentaModel, VentaState} from './venta.state';


export interface AppState {
    usuarioLogueadoModel: UsuarioLogueadoModel;
    ventaModel: VentaModel;
}

export const states = [UsuarioLogueadoState, VentaState];
