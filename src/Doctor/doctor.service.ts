import { Injectable } from '@nestjs/common';
import { Doctorinfo } from './doctorrinfo.dto';

@Injectable()
export class DoctorService {

  public doctorinfo : Doctorinfo[] = [];

  getHello(): string {
    return 'Hello World!';
  }
  
}
