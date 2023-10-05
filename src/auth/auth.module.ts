import { Module }           from '@nestjs/common';
import { TypeOrmModule }    from "@nestjs/typeorm";
import { PassportModule }   from '@nestjs/passport';
import { JwtModule }        from '@nestjs/jwt';
import * as process         from "process";
import { ConfigModule }     from '@nestjs/config';

import { AuthService }      from './auth.service';
import { AuthController }   from './auth.controller';
import { LocalStrategy }    from './local.strategy';
import { UsersModule }      from '../users/users.module';
import { User }             from '../users/entities/user.entity';
import {JwtStrategy}        from "./jwt.strategy";

@Module({
    imports       : [
        ConfigModule.forRoot(),

        UsersModule,
        PassportModule,
        TypeOrmModule.forFeature([User]),

        JwtModule.register({
            global      : true,
            secret      : process.env.JWT_SECRET,
            signOptions : {expiresIn : '6660s'}
        })
    ],
    exports       : [ AuthService ],
    providers     : [ AuthService, LocalStrategy, JwtStrategy, User ],
    controllers   : [ AuthController ],
})

export class AuthModule {}
