import { Injectable } from '@nestjs/common';
import { Doctorinfo} from './doctor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DoctorEntity } from './doctor.entity';
import { DoctorAppointmentsEntity } from './doctor-appointments.entity';
import { Repository } from 'typeorm';
import { patientEntity } from 'src/patient/patient.entity';
import { doctorAppointments } from './doctor-appointment.dto';
import { Patientinfo } from 'src/patient/patient.dto';


@Injectable()
export class DoctorService {
 
  constructor(
    @InjectRepository(DoctorEntity) 
    private doctorRepo: Repository<DoctorEntity>,
    @InjectRepository(DoctorAppointmentsEntity) 
    private doctorAppointmentRepo: Repository<DoctorAppointmentsEntity>,
    @InjectRepository(patientEntity)
    private patientRepo: Repository<patientEntity>){}

    getHello(): string {
      return 'Hello World!';
    }
  // userRepository is the local repository 

  //Create Doctor 
  async addDoctor(Doctorinfo: Doctorinfo): Promise<DoctorEntity> {
    const res = this.doctorRepo.save(Doctorinfo);
    return res;
  }
  //Create Doctor Appointment
  addDoctorAppointment(doctorappointments) {
    return this.doctorAppointmentRepo.save(doctorappointments); 
  }
  //Create patient
  createpatient(patient){ 
    return this.patientRepo.save(patient);
  }
  //Find patient by ID
  getpatientbydoctor(id:number)
  {
    return this.doctorRepo.find(
    {
      where: {id:id},
      relations: {patients:true,patient:true}
    }
  )
}
//Show All patients by doctor
getDoctorBypatients(id:number){
  return this.patientRepo.find(
    {
      where: {id:id},
      relations: {dr:true,dc:true}
    }
  )
}
//Update Doctor By Put
  async updateDoctorbyPut(id: number, updatedUser: Doctorinfo): Promise<DoctorEntity> {
    const res = await this.doctorRepo.update(id, updatedUser);
    return this.doctorRepo.findOneBy({id:id});
  }
//Update Patient By Put
async updatePutpatientByid(id: number, updatedUser: Patientinfo): Promise<patientEntity> {
  const res = await this.patientRepo.update(id, updatedUser);
  return this.patientRepo.findOneBy({id:id});
}
  //Update Doctor Appointment By Put
  async updateDoctorAppointmentbyPut(id: number, updatedUser: doctorAppointments): Promise<DoctorAppointmentsEntity> {
    const res = await this.doctorAppointmentRepo.update(id, updatedUser);
    return this.doctorAppointmentRepo.findOneBy({id:id});
  }
//Update Doctor By Patch
  async updateDoctorbyPatch(id: number, updatedUsers: Doctorinfo): Promise<DoctorEntity> {
    const res = await this.doctorRepo.update(id, updatedUsers);
    return this.doctorRepo.findOneBy({id:id}); 
  }
  //Update Doctor Appointment By Patch
  async updateDoctorAppointmentbyPatch(id: number, updatedUser: doctorAppointments): Promise<DoctorAppointmentsEntity> {
    const res = await this.doctorAppointmentRepo.update(id, updatedUser);
    return this.doctorAppointmentRepo.findOneBy({id:id});
  }
  //Find All Doctors
  async getAllDoctors(): Promise<DoctorEntity[]> {
  return this.doctorRepo.find();
  }
  //Find All Doctors
  async getAllPatients(): Promise<patientEntity[]> {
    return this.patientRepo.find();
    }
   //Find All Doctors Appointments
  async getAllDoctorsAppointments(): Promise<DoctorAppointmentsEntity[]> {
    return this.doctorAppointmentRepo.find();
    }
  //Find Doctor By ID
  async getDoctorbyId(id: number): Promise<DoctorEntity> {
    return this.doctorRepo.findOneBy({id:id});
  }
  //Find Doctor Appointments By ID
  async getDoctorAppointmentsbyId(id: number): Promise<DoctorAppointmentsEntity> {
    return this.doctorAppointmentRepo.findOneBy({id:id});
  }      

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
  //Delete Doctor Appointment By ID
  async deleteDoctorAppointment(id: number){
    const doctorAppointment = await this.doctorAppointmentRepo.delete(id);
    if (doctorAppointment.affected) {
      return true
    }
    else{
      return false
    }
  }
  //login Doctor
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
  //login patient
  async loginpatient(myobj:Patientinfo)
  {
    const res = await this.patientRepo.find(
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
