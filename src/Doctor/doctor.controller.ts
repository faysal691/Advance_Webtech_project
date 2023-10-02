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
  @Get('/searchuserby/:id')
  getUser(@Param('id') id:number): string {
    return "the user is"+id;
  }
  @Get('/searchuserby/:name')
  getName(@Param('id') name:string): string {
    return "The name is"+name;
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
  @Get(':id/patients')
  findPatients(@Param('id') id: string): any {
    return { message: `Patients of Doctor with ID ${id}` };
  }

  @Post(':id/patients')
  addPatient(@Param('id') id: string, @Body() patientData: any): any {
    return { message: `Patient added to Doctor with ID ${id}`, data: patientData };
  }
  @Get(':id/appointments')
  findAppointments(@Param('id') id: string): any {
    return { message: `Appointments of Doctor with ID ${id}` };
  }

  @Post(':id/appointments')
  createAppointment(@Param('id') id: string, @Body() appointmentData: any): any {
    return { message: `Appointment created for Doctor with ID ${id}`, data: appointmentData };
  }

}
