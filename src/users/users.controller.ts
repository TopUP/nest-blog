import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";

import { UsersService }     from './users.service';
import { CreateUserDto }    from './dto/create-user.dto';
import { UpdateUserDto }    from './dto/update-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: UpdateUserDto) {
        return this.usersService.update(+id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
    }
}
