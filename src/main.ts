import { NestFactory }  from '@nestjs/core';
import { AppModule }    from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('nestBlog')
        .setDescription('blog on nest')
        .setVersion('0.0.1')
        .addTag('js node nest blog')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap();
