import { Module, NestModule } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorEntity } from './doctor.entity';
import { ManagerEntity } from 'src/manager/manager.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorEntity,ManagerEntity]),],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule{}
