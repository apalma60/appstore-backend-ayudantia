import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AplicacionesModule } from './aplicaciones/aplicaciones.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ReseniasModule } from './resenias/resenias.module';

@Module({
  imports: [AplicacionesModule, UsuariosModule, ReseniasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
