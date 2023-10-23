import { Controller, Get, Param, Query ,Delete,Body, Put,Post, Patch, UsePipes, ValidationPipe, UploadedFile, UseInterceptors, Res } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctorinfo,CreateDoctorDto,UpdateDoctorDto } from './doctorInfo.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';
import { DoctorEntity } from './doctor.entity';


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
  getIndex(): string {
    return "hello index";
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
  @Post('/adddoctor')
  @UsePipes(new ValidationPipe())
  addDoctor(@Body() user:Doctorinfo ) {
    return this.DoctorService.addDoctor(user);
  } 
  @Post('/addmanager')
  @UsePipes(new ValidationPipe())
  createManager(@Body() manager ) {
    return this.DoctorService.createManager(manager);
  }
  @Get('getmanagers/:id')
  getManagers(@Param('id') id:number){
    return this.DoctorService.getManagers(id);
  }
  @Get('getdoctorbtmanager/:id')
  getDoctorByManagers(@Param('id') id:number){
    return this.DoctorService.getDoctorByManagers(id);
  }
  @Get('/getAllDoctors')
  getAllDoctors(@Body() user:Doctorinfo ) {
    return this.DoctorService.getAllDoctors();
  }
  @Get('/searchDoctorBy/:id')
  getDoctorbyId(@Param('id') id: number):Promise<DoctorEntity> {
    return this.DoctorService.getDoctorbyId(id);
  } 
  @Put('/updatePutByid/:id')
  updateUser(@Param('id') id: number, @Body() userInfo:Doctorinfo) {
    return this.DoctorService.updateUser(id,userInfo);
  }
  @Patch('/updatePatchByid/:id')
  updateUsers(@Param('id') id: number, @Body() userInfo:Doctorinfo) {
    return this.DoctorService.updateUsers(id,userInfo);
  }
  // @Put('/updateByid/:id')
  // updateUser(Param('id')id:number,Body() userInfo:Doctorinfo){
  //   return this.DoctorService.updateUser(id,userInfo);
  // }
  // @Delete('/deleteDoctor/:id')
  // deleteDoctor(@Param('id') id:number ):Promise<void> {
  //   return this.DoctorService.deleteDoctor(id);
  // }

  @Delete('/deleteDoctor/:id')
  async deleteDoctor(@Param('id') id:number ):Promise<string> {
    //const deleteDoctor = await this.DoctorService.deleteDoctor(id);
    try {
      await this.DoctorService.deleteDoctor(id);
      return `Doctor with ID ${id} has been successfully deleted.`;
    }catch (error) {
      return error.message;
    }
  }


  /*-------------------------------------------------------------------------------------- */



/*-------------------------------------------Upload File-------------------------------------------*/
@Get('/getimage/:name')
 getImages(@Param('name') name:string, @Res() res) {
 res.sendFile(name,{ root: './upload' })
 }

@Post('/creatDoctor')
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