import { Module }           from '@nestjs/common';
import { TypeOrmModule }    from '@nestjs/typeorm';
import { MulterModule }     from "@nestjs/platform-express";
import { diskStorage }      from "multer";

import { CategoriesService }    from './categories.service';
import { CategoriesController } from './categories.controller';
import { Category }             from "./entities/category.entity";
import {extname} from "path";



@Module({
    imports     : [
        TypeOrmModule.forFeature([Category]),
        MulterModule.register({
            storage         : diskStorage({
                destination: function (req, file, cb) {
                    cb(null, './uploads/categories_images')
                },
                filename: function (req, file, cb) {
                    console.log(file);
                    const uniqueSuffix  = Date.now() + '-' + Math.round(Math.random() * 1E9)
                    const fileExtName   = extname(file.originalname);
                    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtName);
                }
            }),
            preservePath    : true,
        }),
    ],
    controllers : [CategoriesController],
    providers   : [CategoriesService, MulterModule],
})
export class CategoriesModule {}
