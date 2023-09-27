import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "hello me";
  }
  @Get('/index')
  getIndex(): string {
    return "hello index";
  }
}
