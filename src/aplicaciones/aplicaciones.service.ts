import { Injectable } from '@nestjs/common';
import { Aplicacion } from './models/aplicacion.model';
import { CreateAplicacionDTO } from './dto/create.aplicacion.dto';

@Injectable()
export class AplicacionesService {
    aplicaciones: Aplicacion[] = [];

    crearAplicacion (nuevaAplicacion: CreateAplicacionDTO): Aplicacion {
        const aplicacionCreada: Aplicacion = new Aplicacion(
            this.aplicaciones.length + 1,
            nuevaAplicacion.nombre,
            nuevaAplicacion.precio,
            nuevaAplicacion.sistemaOperativo,
            nuevaAplicacion.tamanio,
            nuevaAplicacion.version
        );
        this.aplicaciones.push(aplicacionCreada);
        return aplicacionCreada;
    }
}
