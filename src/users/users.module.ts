import { Module } from '@nestjs/common';
import { usersController } from './users.controller';
import { usersService } from './users.service';
import { userEntity } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorEntity } from 'src/doctors/doctor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([userEntity,DoctorEntity])],
  controllers: [usersController],
  providers: [usersService],
})
export class usersModule {}
