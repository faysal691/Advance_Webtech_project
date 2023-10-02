import { Controller, Get, Param, Query ,Delete,Body, Put,Post } from '@nestjs/common';
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

  @Get('/searchuserby/:id')
  getUser(@Param('id') id:number): string {
    return "the user is"+id;
  }

  @Get('/searchuserby/:name')
  getName(@Param('id') name:string): string {
    return "the name is"+name;
  }

  @Get('/getuserby')
  getUserByNameAndId(@Query('name') name: string, @Query('id') id:number): string {
    return "the name is "+name+" and ID id "+id;
  }
  @Get('/searchuserbyobject')
  getUserByBody(@Body('name') name: string, @Body('id') id:number): object{
    return {name,id};
  }

  @Post('/adduserobject')
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

  @Post('/update')
  update(@Body()updateDoctorDto:UpdateDoctorDto):any{
    return {message : 'Doctor Updated', data:UpdateDoctorDto};
  }

}
