import { Injectable } from '@nestjs/common';
import { Doctorinfo } from './doctorInfo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DoctorEntity } from './doctor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {
 
  constructor(
    @InjectRepository(DoctorEntity) 
    private doctorRepo: Repository<DoctorEntity>) {}

    getHello(): string {
      return 'Hello World!';
    }
  // userRepository is the local repository 
  
  async addDoctor(Doctorinfo: Doctorinfo): Promise<DoctorEntity> {
    const res = this.doctorRepo.save(Doctorinfo);
    return res;
  }
  async updateUser(id: number, updatedUser: Doctorinfo): Promise<DoctorEntity> {
    const res = await this.doctorRepo.update(id, updatedUser);
    return this.doctorRepo.findOneBy({id:id}); 
  }
  async updateUsers(id: number, updatedUsers: Doctorinfo): Promise<DoctorEntity> {
    const res = await this.doctorRepo.update(id, updatedUsers);
    return this.doctorRepo.findOneBy({id:id}); 
  }
  async getAllDoctors(): Promise<DoctorEntity[]> {
  return this.doctorRepo.find();
  }
  async getDoctorbyId(id: number): Promise<DoctorEntity> {
    return this.doctorRepo.findOneBy({id:id});
  }      
  async deleteDoctor(id: number): Promise<void> {
    await this.doctorRepo.delete(id);
  }


}
