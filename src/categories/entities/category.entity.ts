import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

import {Post} from "../../posts/entities/post.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    @ApiProperty() id: number;

    @Column()
    @ApiProperty() title: string;

    @OneToMany(() => Post, post => post.category)
    @ApiProperty({type: () => [Post]}) posts: Post[]
}
