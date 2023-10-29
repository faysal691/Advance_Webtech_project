import { DoctorEntity } from 'src/Doctor/doctor.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';



@Entity('patient')
export class patientEntity{

@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@Column()
username: string;

@Column()
password: string;

@ManyToOne(() => DoctorEntity, doctor => doctor.patients)
  dr: DoctorEntity[];
  
// @JoinColumn()
// userProfile: DoctorEntity;

}