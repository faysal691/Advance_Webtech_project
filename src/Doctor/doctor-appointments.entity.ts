import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import { DoctorEntity } from './doctor.entity';


@Entity('doctorappointments')
export class DoctorAppointmentsEntity{

@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@Column()
date: string;

@Column()
time: string;

@OneToOne(() => DoctorEntity, doctor => doctor.doctorappointments)
@JoinColumn()
doc: DoctorEntity[];
  
}