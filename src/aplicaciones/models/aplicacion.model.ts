import { SistemaOperativo } from '../enum/sistema_operativo.enum';

export class Aplicacion {
    private id: number;
    private nombre: string;
    private precio: number;
    private sistemaOperativo: SistemaOperativo;
    private calificacion: number = 0;
    private tamanio: number;
    private version: string;
    private descargas: number = 0;

    constructor (id: number, nombre: string, precio: number, 
                 sistemaOperativo: SistemaOperativo, 
                 tamanio: number, version: string) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.sistemaOperativo = sistemaOperativo;
        this.tamanio = tamanio;
        this.version = version;
    }
}