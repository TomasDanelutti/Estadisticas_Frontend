import {HttpState, HTTPStateModel} from '../http/http.state';
import {AuthState, AuthStateModel} from '../pages/auth/login/state/auth.state';
import {UsuarioState, UsuarioStateModel} from '../pages/empresas/state/usuario.state';
import {LocalidadState, LocalidadStateModel} from '../components/localidad/state/localidad.state';
import {FormularioUsuarioStateModel, UsuarioFormState} from '../components/usuario-form/state/usuarioForm-state';
import {
    ProfesionalFormState,
    ProfesionalFormStateModel
} from '../pages/gestionar-profesionales/crear-modificar-profesional/state/profesionalForm-state';
import {
    EspecialidadFormState,
    FormularioEspecialidadStateModel
} from '../components/especialidades-forms/state/especialidadForm-state';
import {
    ConsultaBaseFormState,
    FormularioConsultaBaseStateModel
} from '../components/especialidades-forms/consulta-base/state/consultaBaseForm-state';
import {DniState, DniStateModel} from '../components/dni-input/state/dni-state';
import {FechaState, FechaStateModel} from '../components/fecha/state/fecha.state';
import {
    CrearUsuarioFormState,
    FormCrearCuentaUsuarioStateModel
} from '../components/crear-cuenta-usuario/state/crearCuentaUsuario-state';
import {
    TurnoHorarioAtencionState,
    TurnoHorarioAtencionStateModel
} from '../components/Agenda/tabla-horario-atencion/state/agendaTurnos-state';
import {
    PacienteSeleccionadoState,
    PacienteSeleccionadoStateModel
} from '../components/buscador-pacientes/state/buscadorPaciente-state';
import {
    SelectorEspecialidadState,
    SelectorEspecialidadStateModel
} from '../components/especialidades-selector/state/especialidadSelector-state';
import {
    ProfesionalSeleccionadoState,
    ProfesionalSeleccionadoStateModel
} from '../components/buscador-profesionales/state/profesionalSeleccionado-state';

export interface AppState {
    httpStateModel: HTTPStateModel;
    turnoHorarioAtencionStateModel: TurnoHorarioAtencionStateModel,
    dniStateModel: DniStateModel;
    fechaStateModel: FechaStateModel;
    formularioCrearUsuarioStateModel: FormCrearCuentaUsuarioStateModel,
    authStateModel: AuthStateModel;
    usuarioStateModel: UsuarioStateModel;
    localidadStateModel: LocalidadStateModel;
    profesionalFormStateModel: ProfesionalFormStateModel;
    formularioUsuarioStateModel: FormularioUsuarioStateModel;
    formularioEspecialidadStateModel: FormularioEspecialidadStateModel;
    formularioConsultaBaseStateModel: FormularioConsultaBaseStateModel;
    buscadorPacienteStateModel: PacienteSeleccionadoStateModel;
    selectorEspecialidadStateModel: SelectorEspecialidadStateModel;
    profesionalSeleccionadoStateModel: ProfesionalSeleccionadoStateModel;
}

export const states = [
    HttpState, AuthState,
    UsuarioState, DniState,
    LocalidadState, UsuarioFormState, ProfesionalFormState,
    EspecialidadFormState, ConsultaBaseFormState,
    FechaState, CrearUsuarioFormState,
    TurnoHorarioAtencionState, SelectorEspecialidadState,
    PacienteSeleccionadoState, ProfesionalSeleccionadoState];