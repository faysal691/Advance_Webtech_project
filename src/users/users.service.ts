import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userEntity } from './users.entity';
import { Repository } from 'typeorm';
import { usersInfo } from './users.dto';

@Injectable()
export class usersService {
  constructor(@InjectRepository(userEntity) private userRepository: Repository<userEntity>) {}
  getHello(): string {
    return "Hello World!";
  }
  async adduser(usersInfo: usersInfo): Promise<userEntity> {
    const res = await this.userRepository.save(usersInfo);
    return res;
    }
  async getAllUsers(id: number): Promise<userEntity> {
    return this.userRepository.findOneBy({id:id});
    }
    async updateDoctorbyPut(id: number, updatedUser: usersInfo): Promise<userEntity> {
      const res = await this.userRepository.update(id, updatedUser);
      return this.userRepository.findOneBy({id:id});
    }
    
    async loginuser(myobj:usersInfo)
    {
      const res = await this.userRepository.find(
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



