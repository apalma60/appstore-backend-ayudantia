import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración básica de Swagger
  const config = new DocumentBuilder()
    .setTitle('API Usuarios')
    .setDescription('Esta API describe a los usuarios de...')
    .setVersion('1.0')
    .addTag('usuarios') // Opcional: etiquetas
    .addBearerAuth() // Opcional: autenticación JWT
    .build();

  // Crear documento Swagger
  const document = SwaggerModule.createDocument(app, config);

  // Configurar endpoint para visualizar Swagger
  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
