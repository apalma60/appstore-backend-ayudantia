import { Aplicacion } from "src/aplicaciones/models/aplicacion.model";
import { Usuario } from "src/usuarios/models/usuario.model";

export class Resenia {
    private id: number;
    private usuario: Usuario;
    private aplicacion: Aplicacion;
    private calificacion: number;
    private texto: String;
    private fecha: Date = new Date();

    constructor (id: number, usuario: Usuario, aplicacion: Aplicacion,
                 calificacion: number, texto: String) {
        this.id = id;
        this.usuario = usuario;
        this.aplicacion = aplicacion;
        this.calificacion = calificacion;
        this.texto = texto;
    }




}