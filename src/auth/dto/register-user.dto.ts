import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
    @ApiProperty() full_name   : string;
    @ApiProperty() email       : string;
    @ApiProperty() password    : string;
}
