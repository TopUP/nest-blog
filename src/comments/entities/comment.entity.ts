import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn} from 'typeorm';
import {User} from "../../users/entities/user.entity";
import {Post} from "../../posts/entities/post.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.comments, {eager: true})
    user: User

    @OneToOne(type => Post, {eager: true})
    @JoinColumn()
    post: Post

    @Column()
    body: string;
}
