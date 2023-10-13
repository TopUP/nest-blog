import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Categories')
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
