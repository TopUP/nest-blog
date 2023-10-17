import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsAlphanumeric } from 'class-validator';

export class RegisterUserDto {
    @ApiProperty() @IsNotEmpty() @IsString()        full_name   : string;
    @ApiProperty() @IsEmail()                       email       : string;
    @ApiProperty() @IsNotEmpty() @IsAlphanumeric()  password    : string;
}
