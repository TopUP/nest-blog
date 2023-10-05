import { Controller, Post, Body, UseGuards, Request }   from '@nestjs/common';
import { AuthGuard }    from '@nestjs/passport';

import { AuthService }      from './auth.service';
import { RegisterUserDto }  from "./dto/register-user.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    register(@Body() data: RegisterUserDto) {
        return this.authService.register(data);
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    login(@Request() req) {
        return this.authService.login(req.user);
    }
}
