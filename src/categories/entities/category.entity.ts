import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {ApiProperty, ApiTags} from "@nestjs/swagger";

import {Post} from "../../posts/entities/post.entity";

@Entity()
@ApiTags('Categories')
export class Category {
    @PrimaryGeneratedColumn()
    @ApiProperty() id: number;

    @Column()
    @ApiProperty() title: string;

    @OneToMany(() => Post, post => post.category)
    @ApiProperty({type: () => [Post]}) posts: Post[]
}
