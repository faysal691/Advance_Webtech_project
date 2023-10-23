import { Injectable } from '@nestjs/common';
import { Doctorinfo } from './doctorInfo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DoctorEntity } from './doctor.entity';
import { Repository } from 'typeorm';
import { ManagerEntity } from 'src/manager/manager.entity';


@Injectable()
export class DoctorService {
 
  constructor(
    @InjectRepository(DoctorEntity) 
    private doctorRepo: Repository<DoctorEntity>,
    @InjectRepository(ManagerEntity)
    private managerRepo: Repository<ManagerEntity>) {}

    getHello(): string {
      return 'Hello World!';
    }
  // userRepository is the local repository 
   
  async addDoctor(Doctorinfo: Doctorinfo): Promise<DoctorEntity> {
    const res = this.doctorRepo.save(Doctorinfo);
    return res;
  }
  createManager(manager){
    return this.managerRepo.save(manager);
  }
  getManagers(id:number)
{
 return this.doctorRepo.find(
    {
      where: {id:id},
      relations: {managers:true}
    }
  )
}
getDoctorByManagers(id:number){
  return this.managerRepo.find({
    where: {id:id},
    relations: {dr:true}
  })
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
  // async deleteDoctor(id: number): Promise<void> {
  //   await this.doctorRepo.delete(id);
  // }
  async deleteDoctor(id: number): Promise<void> {
    const doctor = await this.doctorRepo.delete(id);
    if (!doctor) {
      `Doctor with ID ${id} is Delete`
    }
    else{
      throw new Error(`Doctor with ID ${id} is not found`);
      
    }
  }


}
