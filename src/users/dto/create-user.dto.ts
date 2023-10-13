import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ description: 'Имя пользователя',                 nullable: false }) full_name   : string;
    @ApiProperty({ description: 'Электронная почта пользователя',   nullable: false }) email       : string;
    @ApiProperty({ description: 'Пароль пользователя',              nullable: false }) password    : string;
}
