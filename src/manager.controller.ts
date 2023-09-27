import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Admininfo } from './managerinfo.dto';

@Controller('manager')
export class ManagerController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "hello me";
  }
  @Get('/index')
  getIndex(): string {
    return "hello index";
  }
  @Get('/admin')
  getAdmin(): string {
    return "hello admin";
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
  addUserByObject(@Body() user:Admininfo ): object {
    return user;
  }

}
