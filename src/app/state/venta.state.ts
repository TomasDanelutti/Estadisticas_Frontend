import {Venta} from '../model/Venta';
import {Injectable} from '@angular/core';
import {Producto} from '../model/Producto';
import {Action, Selector, State, StateContext} from '@ngxs/store';

export class SetVentaAction {
    static readonly type = '[Venta] Setear usuario';

    constructor(public venta: Venta) {
    }
}

export class ResetVenta {
    static readonly type = '[Venta] Resetear venta';

    constructor() {
    }
}

export class VentaModel {
    public venta: Venta;
}

const ventaStateDefault: VentaModel = {
    venta: null,
};

@State<VentaModel>({
    name: 'Venta',
    defaults: ventaStateDefault
})

@Injectable()
export class VentaState {

    @Selector()
    static getVenta(state: VentaModel): Venta {
        return state.venta;
    }

    @Selector()
    static getProductos(state: VentaModel): Producto[] {
        return state.venta.producto;
    }

    @Action(SetVentaAction)
    setVenta(ctx: StateContext<VentaModel>, action: SetVentaAction) {
        ctx.patchState({ venta: action.venta });
    }

    @Action(ResetVenta)
    resetUsuario(ctx: StateContext<VentaModel>, action: ResetVenta) {
        ctx.setState(ventaStateDefault);
    }
}
