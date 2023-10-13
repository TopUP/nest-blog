import { Controller, Get } from '@nestjs/common';
import {ApiExcludeEndpoint, ApiTags} from "@nestjs/swagger";

import { AppService } from './app.service';

@ApiTags('App')
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @ApiExcludeEndpoint()
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
