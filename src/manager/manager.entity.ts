import { DoctorEntity } from 'src/Doctor/doctor.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';



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
age: number;

@Column()
specialty: string;
 

@Column()
filename: string;

@ManyToOne(() => DoctorEntity, doctor => doctor.managers)
  dr: DoctorEntity;
}
