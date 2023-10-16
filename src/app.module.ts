import { Module } from '@nestjs/common';
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
    database: 'abc_ecommerce',//my own pgadmin database name
    autoLoadEntities: true,
    synchronize: true,
    } ),],
  controllers: [ManagerController],
  providers: [],
})
export class AppModule {}