import { ApiProperty } from '@nestjs/swagger';

import { User }     from '../../users/entities/user.entity';
import { Category } from '../../categories/entities/category.entity';

export class CreatePostDto {
    @ApiProperty({ description: 'Владелец поста',   nullable: false }) user        : User;
    @ApiProperty({ description: 'Категория поста',  nullable: false }) category    : Category;
    @ApiProperty({ description: 'Заголовок поста',  nullable: false }) title       : string;
    @ApiProperty({ description: 'Тело поста',       nullable: false }) body        : string;
}
