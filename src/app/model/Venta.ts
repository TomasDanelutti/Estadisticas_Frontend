import {Vendedor} from './Vendedor';
import {Mes} from './Mes';
import {Producto} from './Producto';

export class Venta {
    idVenta: number;
    vendedor: Vendedor;
    mes: Mes;
    producto: Producto[];
    cantProductos: number;
    total: number;
    fecha: Date;
}
