import { Localidad } from './localidad';
import { CategoriaImpositiva } from './categoria-impositiva';
import { Permiso } from './permiso';

export class Usuario {
  idUsuario: number;
  dni: number;
  clave: string;
  nombre: string;
  apellido: string;
  domicilio: string;
  localidad: Localidad;
  telefono: string;
  email: string;
  categoriaImpositiva: CategoriaImpositiva;
  activo: boolean;
  uuid: string;
  permisos: Permiso [];

  constructor () {
    this.idUsuario = null;
    this.dni = null;
    this.clave = null;
    this.nombre = null;
    this.apellido = null;
    this.domicilio = null;
    this.localidad = null;
    this.telefono = null;
    this.email = null;
    this.categoriaImpositiva = null;
    this.activo = null;
    this.uuid = null;
    this.permisos = null;
  }
}
