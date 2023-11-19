import { Body, Controller, Delete, Get,HttpException,HttpStatus,Param,Patch,Post, Put, Query, Session, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { usersService } from './users.service';

import { usersInfo } from './users.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';

@Controller('user')
export class usersController {
  constructor(private readonly usersService: usersService) {}

  // @Get()
  // getHello(): string {
  //   return this.usersService.getHello();
  // }
//Creat user
@Post('/creatuser')
adduser(@Body() user:usersInfo){
  return this.usersService.adduser(user);
}
  @Get('/sabbir/:id')
  getUser(@Param('id') id:number): string {
    return "the Doctor is"+id;
  }
  @Get('/getusersbyId')
  getAllUsers(@Param('id') id:number) {
    return this.usersService.getAllUsers(id);
  }

  @Get('/searusersorbyobject')
  getUserByBody(@Body('name') name: string, @Body('id') id:number): object{
    return {name,id};
  }
  //llllllllllllllllllllllllllll

  @Post('/sabbirs/:id')
  postsUser(@Param('id') id:number): string {
    return "the users is"+id;
  }
  @Post('/sabbirss/:id')
  postsUsers(@Param('id') id:number): string {
    return "the userss is"+id;
  }
  @Delete('/searusersorbyobject')
  getUsersByBody(@Body('name') name: string): object{
    return {name};
  }
    @Delete('/:id')
  remove(@Param('id') id: string): any {
    return { message: `users with ID ${id} deleted` };
  }
  
  @Patch(':id')
  partialUpdate(@Param('id') id: string): any {
    return { message: `users with ID ${id} partially updated`};
  }

  @Patch(':sabbir')
  partialsUpdate(@Param('sabbir') id: string): any {
    return { message: `users with ID ${id} partially updated`};
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateusersDto: usersInfo): any {
    return { message: `users with ID ${id} updated`, data: updateusersDto };
  }

  
  @Post('/userlogin')
  async logindoctor(@Body()myobj:usersInfo,@Session()session){
    const res = await this.usersService.loginuser(myobj);
    if(res==true)
    {
      session.email=myobj.username;
      return {message:"success"};
    }
    else{
      return {message:"failed"};
    }
    }
    @Post('login')
    async login(@Body() adminInfo:usersInfo, 
    @Session() session)
    {
     if(await this.usersService.loginuser(adminInfo))
     {
      session.email=adminInfo.username;
      return true;
     }
     else
     {
      throw new HttpException('UnauthorizedException', 
      HttpStatus.UNAUTHORIZED); 
    
     }
    }

    //Create Doctor With Upload Picture
@Post('/createuser')
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
addAdmin(@Body() usersInfo:usersInfo, @UploadedFile()  file: Express.Multer.File) {
  usersInfo.filename = file.filename;
  return this.usersService.adduser(usersInfo);
}
    
  
}

