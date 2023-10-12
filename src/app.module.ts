import { Module } from '@nestjs/common';
import { DoctorController } from './Doctor/doctor.controller';
import { DoctorService } from './Doctor/doctor.service';
import { ManagerController } from './manager.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorModule } from './Doctor/doctor.module';

@Module({
  imports: [DoctorModule,TypeOrmModule.forRoot(
    { 
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'abc_ecommerce',//Change to your database name
    autoLoadEntities: true,
    synchronize: true,
    } ),],
  controllers: [DoctorController, ManagerController,],
  providers: [DoctorService],
})
export class AppModule {}