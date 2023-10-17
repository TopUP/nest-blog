import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

@ApiTags('Categories')
export class CreateCategoryDto {
    @ApiProperty({ description: 'Название категории', nullable: false })
    @IsNotEmpty()
    @IsString()
    title: string;
}
