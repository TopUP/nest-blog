import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

import {User} from "../../users/entities/user.entity";
import {Post} from "../../posts/entities/post.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    @ApiProperty() id: number;

    @ManyToOne(() => User, user => user.comments, {eager: true})
    @ApiProperty({type: () => User}) user: User

    @ManyToOne(() => Post, post => post.comments, {eager: true})
    @ApiProperty({type: () => Post}) post: Post

    @Column()
    @ApiProperty() body: string;
}
