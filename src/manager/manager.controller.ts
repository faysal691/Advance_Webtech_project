import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DoctorService } from '../Doctor/doctor.service';
import { Doctorinfo } from '../Doctor/doctorInfo.dto';

@Controller('manager')
export class ManagerController {

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

}
