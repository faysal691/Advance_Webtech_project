import { Module, NestModule } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
//import { DoctorMiddleware } from './doctor.middleware';
//import { MiddlewareBuilder } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorEntity } from './doctor.entity';



@Module({
  imports: [TypeOrmModule.forFeature([DoctorEntity]),],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule{}
// export class DoctorModule implements NestModule{
//   configure(consumer: MiddlewareBuilder){
//     consumer.apply(DoctorMiddleware).forRoutes('doctor');
//   }
// }
 