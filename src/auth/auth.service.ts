import * as process         from "process";
import * as bcrypt          from 'bcrypt';
import { Injectable }       from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository }       from "typeorm";
import { JwtService }       from '@nestjs/jwt';

import { User }             from "../users/entities/user.entity";
import { RegisterUserDto }  from "./dto/register-user.dto";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>,
        private jwtService: JwtService,
    ) {}

    async register(data: RegisterUserDto) {
        data.password = await bcrypt.hash(data.password, +process.env.SALT);

        return this.repository.save({...data});
    }

    // async login(data: LoginUserDto) {
    //     const user = await this.repository.findOneBy({email: data.email});
    //
    //     if (!user) {
    //         return false;
    //     }
    //
    //     return bcrypt.compare(data.password, user.password);
    // }

    async login(user: any) {
        return {
            access_token: this.jwtService.sign(this.getPayload(user)),
        }
    }

    getPayload(user: any) {
        return {
            full_name   : user.full_name,
            email       : user.email,
            id          : user.id
        };
    }

    async validateUser(email: string, pass: string) {
        const user = await this.findByEmail(email);

        if (!user) {
            return null;
        }

        if (! await bcrypt.compare(pass, user.password)) {
            return null;
        }

        const { password, ...result } = user;

        return result;
    }

    findByEmail(email: string) {
        return this.repository.findOneBy({email});
    }
}
