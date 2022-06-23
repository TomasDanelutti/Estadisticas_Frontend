import {Turno} from './Turno';
import {Programa} from './Programa';

export class Curso {
    idUCurso: number;
    nombre: string;
    turno: Turno;
    programa: Programa;
    cupoMaximo: number;
    cupoMinimo: number;
    fecha: Date;
    profesor: string;

}
