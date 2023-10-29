import { DoctorEntity } from 'src/Doctor/doctor.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';



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

@ManyToOne(() => DoctorEntity, doctor => doctor.managers)
  dr: DoctorEntity[];
  
// @JoinColumn()
// userProfile: DoctorEntity;

}
