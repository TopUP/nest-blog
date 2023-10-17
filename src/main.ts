import  { NestFactory }  from '@nestjs/core';
import { AppModule }    from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const swaggerConfig = new DocumentBuilder()
        .setTitle('nestBlog')
        .setDescription('blog on nest')
        .setVersion('0.0.1')
        // .addTag('js node nest blog')
        .build();
    const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, swaggerDocument);

    app.useGlobalPipes(new ValidationPipe());

    await app.listen(3000);
}
bootstrap();
