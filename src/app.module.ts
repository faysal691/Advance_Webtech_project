import { Module } from '@nestjs/common';import { usersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorController } from './doctors/doctor.controller';
@Module({
  imports: [usersModule ,TypeOrmModule.forRoot(
    { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '065202',
    database: 'firstsql',//Change to your database name
    autoLoadEntities: true,
    synchronize: true,
    } ),],
  controllers: [DoctorController],
  providers: [],
})
export class AppModule {}
