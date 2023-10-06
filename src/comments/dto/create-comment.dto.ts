import { ApiProperty } from '@nestjs/swagger';

import { User } from '../../users/entities/user.entity';
import { Post } from '../../posts/entities/post.entity';

export class CreateCommentDto {
    @ApiProperty() user    : User;
    @ApiProperty() post    : Post;
    @ApiProperty() body    : string;
}
