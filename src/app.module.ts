import { Module }           from '@nestjs/common';
import { TypeOrmModule }    from '@nestjs/typeorm';
import { DataSource }       from 'typeorm';
import { ConfigModule }     from '@nestjs/config';
import * as process         from "process";

import { AppController }    from './app.controller';
import { AppService }       from './app.service';

import { UsersModule }      from './users/users.module';
import { User }             from './users/entities/user.entity';

import { PostsModule }      from './posts/posts.module';
import { Post }             from './posts/entities/post.entity';

import { CommentsModule }   from './comments/comments.module';
import { Comment }             from './comments/entities/comment.entity';

import { CategoriesModule } from './categories/categories.module';
import { Category }         from './categories/entities/category.entity';

import { AuthModule }       from './auth/auth.module';

@Module({
    imports: [
        UsersModule,
        PostsModule,
        CommentsModule,
        CategoriesModule,
        AuthModule,

        ConfigModule.forRoot(),

        TypeOrmModule.forRoot({
            type        : 'mysql',
            host        : process.env.DATABASE_HOST,
            port        : 3306,
            username    : process.env.DATABASE_USERNAME,
            password    : process.env.DATABASE_PASSWORD,
            database    : process.env.DATABASE_DATABASE,
            entities    : [
                User,
                Post,
                Comment,
                Category,
            ],
            synchronize : true,
        }),
    ],
    exports: [ UsersModule ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
