import { ApiProperty } from '@nestjs/swagger';

import { User }     from '../../users/entities/user.entity';
import { Category } from '../../categories/entities/category.entity';

export class CreatePostDto {
    @ApiProperty() user        : User;
    @ApiProperty() category    : Category;
    @ApiProperty() title       : string;
    @ApiProperty() body        : string;
}
