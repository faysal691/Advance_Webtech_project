import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import { DoctorEntity } from 'src/doctor/doctor.entity';



@Entity('manager')
export class ManagerEntity{

@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@Column()
username: string;

@Column()
password: string;

@Column()
address: string;
 

@Column()
filename: string;

@ManyToOne(()=>DoctorEntity, doctor=>doctor.managers)
  doctor: DoctorEntity;
}
