import { DoctorEntity } from 'src/Doctor/doctor.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable} from 'typeorm';



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

@ManyToMany(() => DoctorEntity, doctor => doctor.patients)
@JoinTable()
  dr: DoctorEntity[];

}
