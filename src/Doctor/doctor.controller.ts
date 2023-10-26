import { Controller, Get, Param, Query ,Delete,Body, Put,Post, Patch, UsePipes, ValidationPipe, UploadedFile, UseInterceptors, Res, Session } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctorinfo,CreateDoctorDto,UpdateDoctorDto } from './doctorInfo.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';
import { DoctorEntity } from './doctor.entity';
import session from 'express-session';


@Controller('doctor')
export class DoctorController {
  constructor(private readonly DoctorService: DoctorService) {}

  @Get()
  getHello(): string {
    return "hello Me";
  }
  // @Get()
  // findAllDoctor():string{
  //   return "This api will return all doctor";
  // }

  @Get('/index')
  getIndex(@Session()session): Promise<DoctorEntity[]> {
    console.log(session.email)
    return this.DoctorService.getAllDoctors();
  }
  
  // @Get('/searchdoctorby/:name')
  // getName(@Param('name') name:string): string {
  //   return "The name is"+name;
  // }
  // @Get('/searchdoctorby/:username')
  // getUserame(@Param('username') username:string): string {
  //   return "The user is"+username;
  // }
  // @Get('/getdoctorby')
  // getUserByNameAndId(@Query('name') name: string, @Query('id') id:number): string {
  //   return "the name is "+name+" and ID id "+id;
  // }
  // @Get('/searchdoctorbyobject')
  // getUserByBody(@Body('name') name: string, @Body('id') id:number): object{
  //   return {name,id};
  // }
  // @Post('/adddoctorobject')
  // addUserByNameAndId(@Body('name') name: string, @Body('id') id:number): string {
  //   return "the name is "+name+" and ID id "+id;
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto): any {
  //   return { message: `Doctor with ID ${id} updated`, data: updateDoctorDto };
  // }
  // @Patch(':id')
  // partialUpdate(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto): any {
  //   return { message: `Doctor with ID ${id} partially updated`, data: updateDoctorDto };
  // }

  
  // @Delete('/deletedoctorby/:name')
  // removename(@Param('name') name: string): string {
  //   return "Doctor "+name+" id is deleted";
  // }
  // @Delete('/deletedoctorby:id')
  // removeid(@Param('id') id: number): string {
  //   return "Doctor "+id+" id is deleted";
  // }
  // @Delete('/deletedoctorby')
  // deletedoctor(@Query('name') name: string, @Query('id') id:number): string {
  //   return "Doctor deleted ";
  // }

  // @Post('/adddoctorbyname')
  // @UsePipes(new ValidationPipe())
  // addUserByObjectname(@Body() user:Doctorinfo ): string {
  //   return user.name;
  // }

  // @Post('/create')
  // @UsePipes(new ValidationPipe())
  // create(@Body()createDoctorDto:CreateDoctorDto):any{
  //   console.log(createDoctorDto.name);
  //   return {message : 'Doctor Created', data:CreateDoctorDto};
  // }
 
 /*-------------------------------------------Validation------------------------------------------- */
 //Create Doctor
 @Post('/adddoctor')
  @UsePipes(new ValidationPipe())
  addDoctor(@Body() user:Doctorinfo ) {
    return this.DoctorService.addDoctor(user);
  } 
  //Create Manager
  @Post('/addmanager')
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
  // @Put('/updateByid/:id')
  // updateDoctor(Param('id')id:number,Body() userInfo:Doctorinfo){
  //   return this.DoctorService.updateDoctor(id,userInfo);
  // }
  // @Delete('/deleteDoctor/:id')
  // deleteDoctor(@Param('id') id:number ):Promise<void> {
  //   return this.DoctorService.deleteDoctor(id);
  // }

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