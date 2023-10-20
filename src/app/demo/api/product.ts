interface InventoryStatus {
    label: string;
    value: string;
}
export interface Product {
    id?: string;
    code?: string;
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    fechaNacimiento?: Date;
    ciudad?: string;
    calle?: string;
    colonia?: string;
    codigoPostal?: number;

    fechaInicio?:Date;
    fechaFin?:Date;
    fechaDevolucion?:Date;
    elemento?:string;
    titulo?:string;
    categoria?:string;
}