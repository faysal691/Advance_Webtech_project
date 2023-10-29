import { Controller, Get, Param, Query ,Delete,Body, Put,Post, Patch, UsePipes, ValidationPipe, UploadedFile, UseInterceptors, Res, Session, UseGuards } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctorinfo} from './doctor.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';
import { DoctorEntity } from './doctor.entity';
import session from 'express-session';
import { SessionGuard } from './doctor.guard';
import { doctorAppointments } from './doctor-appointment.dto';


@Controller('doctor')
export class DoctorController {
  constructor(private readonly DoctorService: DoctorService) {}

  @Get()
  getHello(): string {
    return "hello Me";
  }

  @Get('/index')
  @UseGuards(SessionGuard)
  getIndex(@Session()session): Promise<DoctorEntity[]> {
    console.log(session.email)
    return this.DoctorService.getAllDoctors();
  }

 /*-------------------------------------------Validation------------------------------------------- */
 //Create Doctor
 @Post('/createdoctor')
  @UsePipes(new ValidationPipe())
  addDoctor(@Body() user:Doctorinfo ) {
    return this.DoctorService.addDoctor(user);
  }
 //Create Doctor Appointment
 @Post('/createdoctorappointment')
  @UsePipes(new ValidationPipe())
  addDoctorAppointment(@Body() doctorappointments ) { 
    const res = this.DoctorService.addDoctorAppointment(doctorappointments);
    return res;
  }
  //Create Manager
  @Post('/createmanager')
  @UsePipes(new ValidationPipe())
  createManager(@Body() manager ) {
    return this.DoctorService.createManager(manager);
  }
  //Find Manager by ID
  @Get('getmanagerbydoctor/:id')
  getManagers(@Param('id') id:number){
    return this.DoctorService.getManagers(id);
  }
  //Show All Managers
  @Get('getdoctorbymanager/:id')
  getDoctorByManagers(@Param('id') id:number){
    return this.DoctorService.getDoctorByManagers(id);
  }
  //Find All Doctors
  @Get('/getAllDoctors')
  getAllDoctors(@Body() user:Doctorinfo ) {
    return this.DoctorService.getAllDoctors();
  }
  //Find All Doctors Appointments
  @Get('/getAllDoctorsappointments')
  getAllDoctorsAppointments(@Body() user:doctorAppointments ) {
    return this.DoctorService.getAllDoctorsAppointments();
  }
  // @Get(':id/appointments')
  // async getAppointmentsForDoctor(@Param('id') doctorId: string) {
  //   const appointments = await this.getAppointmentsForDoctor(doctorId);
  //   return appointments;
  // }
  //Find Doctor By ID
  @Get('/searchDoctorBy/:id')
  getDoctorbyId(@Param('id') id: number):Promise<DoctorEntity> {
    return this.DoctorService.getDoctorbyId(id);
  } 
  //Update Doctor By Put
  @Put('/updatePutByid/:id')
  updateDoctorbyPut(@Param('id') id: number, @Body() userInfo:Doctorinfo) {
    return this.DoctorService.updateDoctorbyPut(id,userInfo);
  }
  //Update Doctor By Patch
  @Patch('/updatePatchByid/:id')
  updateDoctorbyPatch(@Param('id') id: number, @Body() userInfo:Doctorinfo) {
    return this.DoctorService.updateDoctorbyPatch(id,userInfo);
  }

  //Delete Doctor By ID
  @Delete('/deleteDoctor/:id')
  async deleteDoctor(@Param('id') id:number ) {
    const deleteDoctor = await this.DoctorService.deleteDoctor(id);
    if(deleteDoctor==true)
    {
      return "deleted";
    }
    else
    {
      return "not found";
    }
    }

  //Doctor Login
  @Post('/doctorlogin')
  async logindoctor(@Body()myobj:Doctorinfo,@Session()session){
    const res = await this.DoctorService.logindoctor(myobj);
    if(res==true)
    {
      session.email=myobj.username;
      return {message:"success"};
    }
    else{
      return {message:"failed"};
    }
  }

  /*-------------------------------------------------------------------------------------- */



/*-------------------------------------------Upload File-------------------------------------------*/
//Find Image By Name
@Get('/getimage/:name')
 getImages(@Param('name') name:string, @Res() res) {
 res.sendFile(name,{ root: './upload' })
 }

//Create Doctor With Upload Picture
@Post('/createDoctor')
@UsePipes(new ValidationPipe())
@UseInterceptors(FileInterceptor('profilepic',
{ fileFilter: (_req, file, cb) => {
  if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
   cb(null, true);
  else {
   cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
   }
  },
  limits: { fileSize: 30000000 },
  storage:diskStorage({
  destination: './upload',
  filename: function (_req, file, cb) {
   cb(null,Date.now()+file.originalname)
  },
  })
}
))
addAdmin(@Body() doctorInfo:Doctorinfo, @UploadedFile()  file: Express.Multer.File) {
  doctorInfo.filename = file.filename;
  return this.DoctorService.addDoctor(doctorInfo);
}




//Upload Photo
@Post('upload')
@UseInterceptors ( FileInterceptor('file',
{ fileFilter: (_req, file, cb) => {
  if (file.originalname.match(/^.*\.(jpeg|jpg|webp|pdf|doc)$/))
  cb(null, true);
  else {
  cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
  }
  },
  limits: { fileSize: 300000000 },
  storage:diskStorage ({
  destination: './upload',
  filename: function (_req, file, cb) {
  cb(null,Date.now()+file.originalname)
  },
  })
}))  
uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file);
  return "sucessfull";
  }



}