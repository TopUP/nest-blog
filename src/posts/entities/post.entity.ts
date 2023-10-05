import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import {User} from "../../users/entities/user.entity";
import {Comment} from "../../comments/entities/comment.entity";
import {Category} from "../../categories/entities/category.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.posts, {eager: true})
    user: User

    @ManyToOne(type => Category, category => category.posts, {eager: true})
    category: Category;

    @Column()
    title: string;

    @Column()
    body: string;

    @OneToMany(type => Comment, comment => comment.post)
    comments: Comment[]
}
