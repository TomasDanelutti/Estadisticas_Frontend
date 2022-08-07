import {Vendedor} from './Vendedor';
import {Producto} from './Producto';

export class Venta {
    idVenta: number;
    vendedor: Vendedor;
    producto: Producto[];
    cantProductos: number;
    total: number;
    fecha: Date;
}
