import { Body, Controller, Delete, Get, Param,Patch,Post, Put, Query, Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminInfo, doctor, provideDoctor } from './admin.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';
import { AdminEntity } from './admin.entity';
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('')
  getHello(): string {
    return this.adminService.getHello();
  }
  @Get('index')
  getIndex(): string {
    return 'this is my project';
  }
 
@Get('/searchuserby')
getUserByNameAndId(@Query('name') name: string, @Query('id')id:number): string{

  return "the user is "+ name +" and Id is "+id;
}
@Get('/searchuserbyobject')
getUserByBody(@Body("name") name : string, @Body("id") id :number): object{
  return {name,id};
  
}
@Get('/searchuserbyobject')
getUserByBodyf(@Body() myobj:object): object{
  return myobj;
  
}
@Post('adduser')
addUser (@Body() userInfo: AdminInfo): object {
  return {"name":userInfo.name};
}
@Post('/doctorinfo')
@UsePipes(new ValidationPipe())
adddoctor(@Body()AdminInfo: AdminInfo): string {
  return AdminInfo.name;
}
@Delete('/admindelete/:id')
  amdminRemove(@Param('id') id: number): Promise<void> {

    return this.adminService.deleteUser(id);
  }
@Put('/updatesvalue/:id')
updateAdmins(@Param('id')id:number,@Body()adminInfo:AdminInfo){
return this.adminService.updateAdmin(id,adminInfo)
}
@Patch('/updatepatch/:id')
  partialsUpdate(@Param('id') id: number, @Body()adminInfo:AdminInfo) {
    return this.adminService.updatesAdmin(id,adminInfo);
  }

  @Get('/searchuserid/:id')
getUser(@Param('id')id:number):Promise<AdminEntity>{

  return this.adminService.getUserbyid(id);
}
@Get('/getalladmin')
getAdmin(@Body() adminInfos:AdminInfo):Promise<AdminEntity[]>{

  return this.adminService.getAllAdmins();
}
@Post('/addsingleadmin')
postAdmin(@Body() adminInfose:AdminInfo):Promise<AdminEntity>{

  return this.adminService.addbyAdmin(adminInfose);
}
@Post('/addadmin')
@UsePipes(new ValidationPipe())
@UseInterceptors(FileInterceptor('file',
  { fileFilter: (_req, file, cb) => {
  if (file.originalname.match(/^.*\.(png|jpeg|jpg)$/))
  cb(null, true);
  else {
  cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
  }
  },
  limits: { fileSize: 400000000 },
  storage:diskStorage({
  destination: './uploads',
  filename: function (_req, file, cb) {
  cb(null,Date.now()+file.originalname)
  },
  })
  }))
  
addAdmin(@Body() adminInfo:AdminInfo,@UploadedFile() file: Express.Multer.File) {
  adminInfo.filenames=file.filename;
return this.adminService.addAdmin(adminInfo);
}

@Put(':id')
  update(@Param('id') id: string, @Body() provideDoctor: provideDoctor): any {
    return { message: `Appoinment doctor with ID ${id} updated`, data: provideDoctor };
  }
  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() provideDoctor: provideDoctor): any {
    return { message: `Appoinment doctor with ID ${id} partially updated`, data: provideDoctor };
  }
  @Delete(':id')
  remove(@Param('id') id: string): any {
    return { message: `Appoinment doctor with ID ${id} deleted` };
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file',
  { fileFilter: (_req, file, cb) => {
  if (file.originalname.match(/^.*\.(png|jpeg)$/))
  cb(null, true);
  else {
  cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
  }
  },
  limits: { fileSize: 400000000 },
  storage:diskStorage({
  destination: './uploads',
  filename: function (_req, file, cb) {
  cb(null,Date.now()+file.originalname)
  },
  })
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file);
  }
  @Get('/addbject/:name')
adminrByBodyf(@Param('name') name,@Res()res){

  res.sendFile(name,{root:'./uploads'})
}
//new start
@Post('/addmanager')
addManager(@Body() managerInfo)
{
return this.adminService.addManager(managerInfo);
}
@Get('getmanagers/:id')
getManagers(@Param('id') id:number)
{
return this.adminService.getManagers(id);
}
@Get('getadminbymanager/:id')
getAdminByManager(@Param('id') id:number)
{
  return this.adminService.getAdminByManager(id);
}




  }






