import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Injectable} from "@nestjs/common";

import {Post}       from "../../posts/entities/post.entity";
import {Comment}    from "../../comments/entities/comment.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    full_name: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @OneToMany(type => Post, post => post.user)
    posts: Post[]

    @OneToMany(type => Comment, comment => comment.user)
    comments: Comment[]
}
