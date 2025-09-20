   import { SistemaOperativo } from "../enum/sistema_operativo.enum";

    export class CreateAplicacionDTO {
    nombre: string;
    precio: number;
    sistemaOperativo: SistemaOperativo;
    tamanio: number;
    version: string;

    constructor (nombre: string, precio: number, sistemaOperativo: SistemaOperativo,
                 tamanio: number, version: string) {
        this.nombre = nombre;
        this.precio = precio;
        this.sistemaOperativo = sistemaOperativo;
        this.tamanio = tamanio;
        this.version = version;
    }



}