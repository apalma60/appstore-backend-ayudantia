import { Aplicacion } from 'src/aplicaciones/models/aplicacion.model';

export class Usuario {
    private nombreUsuario: string;
    private email: string;
    private password: string;
    private aplicacionesDescargadas: Aplicacion[] = [];
    
    constructor (nombreUsuario: string, email: string, password: string) {
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
    }

}