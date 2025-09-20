import { Body, Controller, Post } from '@nestjs/common';
import { CreateAplicacionDTO } from './dto/create.aplicacion.dto';
import { AplicacionesService } from './aplicaciones.service';

@Controller('aplicaciones')
export class AplicacionesController {
    constructor(private readonly aplicacionesService: AplicacionesService) {}

    // Crear App
    @Post()
    crearAplicacion(@Body() nuevaAplicacion: CreateAplicacionDTO) {
        return nuevaAplicacion;
    }
}
