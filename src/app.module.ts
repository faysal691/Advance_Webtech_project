import { Module } from '@nestjs/common';
import { DoctorController } from './Doctor/doctor.controller';
import { DoctorService } from './Doctor/doctor.service';
import { ManagerController } from './manager.controller';


@Module({
  imports: [],
  controllers: [DoctorController, ManagerController],
  providers: [DoctorService],
})
export class AppModule {}
