import { Controller, Get } from '@nestjs/common';

@Controller('doctor')
export class DoctorController {

  @Get()
  getHello(): string {
    return "hello doctor";
  }
  @Get('index')
  getIndex(): string {
    console.log("my console");
    return "hello Doctor Index";
    
  }

}