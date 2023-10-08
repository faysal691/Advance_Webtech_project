import { Controller, Get, Param, Query ,Delete,Body, Put,Post, Patch, ParseIntPipe, UsePipes, ValidationPipe, UploadedFile, UseInterceptors } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctorinfo,CreateDoctorDto,UpdateDoctorDto } from './doctorrinfo.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';


@Controller('doctor')
export class DoctorController {
  constructor(private readonly appService: DoctorService) {}

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

//Validation
  @Post('/adddoctor')
  @UsePipes(new ValidationPipe())
  addUserByObject(@Body() user:Doctorinfo ): object {
    return user;
  }




  @Post('/create')
  @UsePipes(new ValidationPipe())
  create(@Body()createDoctorDto:CreateDoctorDto):any{
    console.log(createDoctorDto.name1);
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

  
  @Delete('/deletedoctorby/:name')
  removename(@Param('name') name: string): string {
    return "Doctor "+name+" id is deleted";
  }
  @Delete('/deletedoctorby:id')
  removeid(@Param('id') id: number): string {
    return "Doctor "+id+" id is deleted";
  }
  @Delete('/deletedoctorby')
  deletedoctor(@Query('name') name: string, @Query('id') id:number): string {
    return "Doctor deleted ";
  }


//Upload
  @Post('upload')
  @UseInterceptors ( FileInterceptor('file',
  { fileFilter: (_req, file, cb) => {
  if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
  cb(null, true);
  else {
  cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
  }
  },
  limits: { fileSize: 300000000 },
  storage:diskStorage ({
  destination: './uploads',
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