import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Post} from "../../posts/entities/post.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToMany(type => Post, posts => posts.category)
    posts: Post[]
}
