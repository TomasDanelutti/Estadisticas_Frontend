import {Action, Selector, StateContext, State} from '@ngxs/store';
import {Usuario} from '../model/Usuario';
import {Injectable} from '@angular/core';

export class SetUsuarioAction {
    static readonly type = '[Usuario] Definir usuario';

    constructor(public usuario: Usuario) {
    }
}

export class ResetUsuario {
    static readonly type = '[Usuario] Resetear usuario';

    constructor() {
    }
}

export class UsuarioLogueadoModel {
    public usuario: Usuario;
}

const usuarioLogueadoStateDefault: UsuarioLogueadoModel = {
    usuario: null,
};

@State<UsuarioLogueadoModel>({
    name: 'Usuario',
    defaults: usuarioLogueadoStateDefault
})

@Injectable()
export class UsuarioLogueadoState {

    @Selector()
    static getUsuario(state: UsuarioLogueadoModel): Usuario {
        return state.usuario;
    }


    @Action(SetUsuarioAction)
    setUsuario(ctx: StateContext<UsuarioLogueadoModel>, action: SetUsuarioAction) {
        ctx.patchState({ usuario: action.usuario });
    }

    @Action(ResetUsuario)
    resetUsuario(ctx: StateContext<UsuarioLogueadoModel>, action: SetUsuarioAction) {
        ctx.setState(usuarioLogueadoStateDefault);
    }


}
