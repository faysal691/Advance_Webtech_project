import { Module, NestModule } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorEntity } from './doctor.entity';
import { patientEntity } from 'src/patient/patient.entity';
import { DoctorAppointmentsEntity } from './doctor-appointments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorEntity,DoctorAppointmentsEntity,patientEntity]),],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule{}
 