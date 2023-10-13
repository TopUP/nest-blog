import {ApiProperty, ApiTags} from '@nestjs/swagger';

@ApiTags('Categories')
export class CreateCategoryDto {
    @ApiProperty({ description: 'Название категории', nullable: false }) title: string;
}
