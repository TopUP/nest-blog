import { User } from '../../users/entities/user.entity';
import { Post } from '../../posts/entities/post.entity';

export class CreateCommentDto {
    user    : User;
    post    : Post;
    body    : string;
}
