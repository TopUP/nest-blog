import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

import {Post}       from "../../posts/entities/post.entity";
import {Comment}    from "../../comments/entities/comment.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @ApiProperty() id: number;

    @Column()
    @ApiProperty() full_name: string;

    @Column({unique: true})
    @ApiProperty() email: string;

    @Column()
    @ApiProperty() password: string;

    @OneToMany(() => Post, post => post.user)
    @ApiProperty({type: () => [Post]}) posts: Post[]

    @OneToMany(() => Comment, comment => comment.user)
    @ApiProperty({type: () => [Comment]}) comments: Comment[]
}
