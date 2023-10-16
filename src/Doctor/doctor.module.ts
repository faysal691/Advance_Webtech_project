import { Module, NestModule } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorEntity } from './doctor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorEntity]),],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule{}
