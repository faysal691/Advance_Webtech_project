import { Injectable } from '@nestjs/common';
import { Doctorinfo } from './doctorInfo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DoctorEntity } from './doctor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {

  public doctorinfo : Doctorinfo[] = [];

  getHello(): string {
    return 'Hello World!';
  }
  
  // constructor(
  //   @InjectRepository(DoctorEntity) 
  //   private doctorRepo: Repository<DoctorEntity>) {}

  // // userRepository is the local repository
  
  // async addUserByObject(user: DoctorEntity): Promise<DoctorEntity> {
  // return this.doctorRepo.save(user);
  // }
  // async getAllUsers(): Promise<DoctorEntity[]> {
  // return this.doctorRepo.find();
  // }
  // async getUserById(id: number): Promise<DoctorEntity> {
  // return this.doctorRepo.findOneBy({id:id});
  // }
  // async updateUser(id: number, updatedUser: DoctorEntity): Promise<DoctorEntity> {
  // await this.doctorRepo.update(id, updatedUser);
  // return this.doctorRepo.findOneBy({id:id}); }
  // async deletedoctor(id: number): Promise<void> {
  // await this.doctorRepo.delete(id);
  // }




}
