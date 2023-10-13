import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import {ApiOperation, ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";

import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category }          from "./entities/category.entity";

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Post()
    @ApiOperation({ summary: 'Создание новой категории' })
    @ApiQuery({ name: 'title', required: true, description: 'Название категории' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Category })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
    create(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoriesService.create(createCategoryDto);
    }

    @Get()
    @ApiOperation({ summary: 'Возвращает все категории' })
    @ApiResponse({ status : HttpStatus.OK, description : 'Success', type : [Category], isArray : true, })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
    findAll() {
        return this.categoriesService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Возвращает одну категорию' })
    @ApiQuery({ name: 'id', required: true, description: 'ID категории' })
    @ApiResponse({ status : HttpStatus.OK, description : 'Success', type : Category, isArray : true, })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
    findOne(@Param('id') id: string) {
        return this.categoriesService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
        return this.categoriesService.update(+id, updateCategoryDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Удаляет категорию' })
    @ApiQuery({ name: 'id', required: true, description: 'ID категории' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Success' })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
    remove(@Param('id') id: string) {
        return this.categoriesService.remove(+id);
    }
}
