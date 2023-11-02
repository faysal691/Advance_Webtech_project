import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne} from 'typeorm';
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

@ManyToOne(() => DoctorEntity, doctor => doctor.doctorappointments)
@JoinColumn()
doc: DoctorEntity[];
  
}