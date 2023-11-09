import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminEntity } from './admin.entity';
import { AdminInfo } from './admin.dto';
import { promises } from 'dns';
import { ManagerEntity } from 'src/manager/manager.entity';

@Injectable()
export class AdminService {
  
  constructor(@InjectRepository(AdminEntity) private userRepository: Repository<AdminEntity>,
  @InjectRepository(ManagerEntity) 
  private managerRepo: Repository<ManagerEntity>) {}

  getHello(): string {
    return 'Hello World!';
  }
 /*async addAdmin(user: AdminInfo): Promise<AdminEntity> {
  const res = await this.userRepository.save(user);
  return res;
    }*/
   /* async addAdmin(user: AdminInfo): Promise<AdminEntity[]> {
      const res = await this.userRepository.save(user);
      return this.userRepository.find();
        }*/
        getUserbyid(id:number): Promise< AdminEntity>{
          return this.userRepository.findOneBy({id:id});

        }
        async updateAdmin(id:number,admininfo:AdminInfo): Promise< AdminEntity>{
          const rest = await this.userRepository.update(id,admininfo);
          return this.userRepository.findOneBy({id:id});

        }
        async updatesAdmin(id:number,admininfo:AdminInfo): Promise< AdminEntity>{
          const rest = await this.userRepository.update(id,admininfo);
          return this.userRepository.findOneBy({id:id});

        }
        async deleteUser(id: number): Promise<void> {
          
          await this.userRepository.delete(id);
          }
          async getAllAdmins(): Promise<AdminEntity[]> {
            return this.userRepository.find();
            }
            async addbyAdmin(user: AdminInfo): Promise<AdminEntity> {
              const res = await this.userRepository.save(user);
              return res;
            }
        async addAdmin(user: AdminInfo): Promise<AdminEntity> {
          const res = await this.userRepository.save(user);
          return this.userRepository.findOneBy({id:1});
        }
        //new start
        addManager(managerInfo)
        {
      return this.managerRepo.save(managerInfo);
        }
      
      getManagers(id:number)
      {
       return this.userRepository.find(
          {
            where: {id:id},
            relations: {managers:true}
      
          }
        )
      }
      getAdminByManager(id:number)
      {
      return this.managerRepo.find(
        {
          where: {id:id},
          relations: {admin:true}
      
        }
      
      )
      
      }
}
