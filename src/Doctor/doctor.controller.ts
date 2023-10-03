import { Controller, Get, Param, Query ,Delete,Body, Put,Post, Patch } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctorinfo,CreateDoctorDto,UpdateDoctorDto } from './doctorrinfo.dto';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly appService: DoctorService) {}

  @Get()
  getHello(): string {
    return "hello Me";
  }
  @Get('/index')
  getIndex(): string {
    return "hello index";
  } 
  @Get('/searchdoctorby/:id')
  getUser(@Param('id') id:number): string {
    return "the Doctor is"+id;
  }
  @Get('/searchdoctorby/:name')
  getName(@Param('name') name:string): string {
    return "The name is"+name;
  }
  @Get('/searchdoctorby/:username')
  getUserame(@Param('username') username:string): string {
    return "The name is"+username;
  }
  @Get('/getdoctorby')
  getUserByNameAndId(@Query('name') name: string, @Query('id') id:number): string {
    return "the name is "+name+" and ID id "+id;
  }
  @Get('/searchdoctorbyobject')
  getUserByBody(@Body('name') name: string, @Body('id') id:number): object{
    return {name,id};
  }
  @Post('/adddoctorobject')
  addUserByNameAndId(@Body('name') name: string, @Body('id') id:number): string {
    return "the name is "+name+" and ID id "+id;
  }
  @Post('/adduser')
  addUserByObject(@Body() user:Doctorinfo ): object {
    return {user};
  }
  @Post('/create')
  create(@Body()createDoctorDto:CreateDoctorDto):any{
    return {message : 'Doctor Created', data:CreateDoctorDto};
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto): any {
    return { message: `Doctor with ID ${id} updated`, data: updateDoctorDto };
  }
  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto): any {
    return { message: `Doctor with ID ${id} partially updated`, data: updateDoctorDto };
  }
  @Delete(':id')
  remove(@Param('id') id: string): any {
    return { message: `Doctor with ID ${id} deleted` };
  }

}
