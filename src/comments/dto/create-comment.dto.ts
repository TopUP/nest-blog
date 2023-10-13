import { ApiProperty } from '@nestjs/swagger';

import { User } from '../../users/entities/user.entity';
import { Post } from '../../posts/entities/post.entity';

export class CreateCommentDto {
    @ApiProperty({ description: 'Владелец комментария', nullable: false }) user    : User;
    @ApiProperty({ description: 'Пост комментария',     nullable: false }) post    : Post;
    @ApiProperty({ description: 'Текст комментария',    nullable: false }) body    : string;
}
