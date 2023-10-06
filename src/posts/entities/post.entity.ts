import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

import {User}       from "../../users/entities/user.entity";
import {Comment}    from "../../comments/entities/comment.entity";
import {Category}   from "../../categories/entities/category.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.posts, {eager: true})
    @ApiProperty({type: () => User}) user: User

    @ManyToOne(() => Category, category => category.posts, {eager: true})
    @ApiProperty({type: () => Category}) category: Category;

    @Column()
    @ApiProperty() title: string;

    @Column()
    @ApiProperty() body: string;

    @OneToMany(() => Comment, comments => comments.post)
    @ApiProperty({type: () => [Comment]}) comments: Comment[]
}
