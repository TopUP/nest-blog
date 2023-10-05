import { User }     from '../../users/entities/user.entity';
import { Category } from '../../categories/entities/category.entity';

export class CreatePostDto {
    user        : User;
    category    : Category;
    title       : string;
    body        : string;
}
