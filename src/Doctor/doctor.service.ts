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
    private managerRepo: Repository<ManagerEntity>){}

    getHello(): string {
      return 'Hello World!';
    }
  // userRepository is the local repository 

  //Create Doctor 
  async addDoctor(Doctorinfo: Doctorinfo): Promise<DoctorEntity> {
    const res = this.doctorRepo.save(Doctorinfo);
    return res;
  }
  //Create Manager
  createManager(manager){
    return this.managerRepo.save(manager);
  }
  //Find Manager by ID
  getManagers(id:number)
  {
    return this.doctorRepo.find(
    {
      where: {id:id},
      relations: {managers:true}
    }
  )
}
//Show All Managers
getDoctorByManagers(id:number){
  return this.managerRepo.find(
    {
      where: {id:id},
      relations: {dr:true}
    }
  )
}
//Update Doctor By Put
  async updateDoctorbyPut(id: number, updatedUser: Doctorinfo): Promise<DoctorEntity> {
    const res = await this.doctorRepo.update(id, updatedUser);
    return this.doctorRepo.findOneBy({id:id});
  }
//Update Doctor By Patch
  async updateDoctorbyPatch(id: number, updatedUsers: Doctorinfo): Promise<DoctorEntity> {
    const res = await this.doctorRepo.update(id, updatedUsers);
    return this.doctorRepo.findOneBy({id:id}); 
  }
  //Find All Doctors
  async getAllDoctors(): Promise<DoctorEntity[]> {
  return this.doctorRepo.find();
  }
  //Find Doctor By ID
  async getDoctorbyId(id: number): Promise<DoctorEntity> {
    return this.doctorRepo.findOneBy({id:id});
  }      
  // async deleteDoctor(id: number): Promise<void> {
  //   await this.doctorRepo.delete(id);
  // }
  //Delete Doctor By ID
  async deleteDoctor(id: number){
    const doctor = await this.doctorRepo.delete(id);
    if (doctor.affected) {
      return true
    }
    else{
      return false
    }
  }
  async logindoctor(myobj:Doctorinfo)
  {
    const res = await this.doctorRepo.find(
      {
        where:{
          username:myobj.username,
          password:myobj.password
      }
      }
    )
      if(res.length!=0){
        return true;
      }
      else{
        return false;
      }
}


}
