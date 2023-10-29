import { ManagerEntity } from 'src/manager/manager.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn} from 'typeorm';
import { DoctorAppointmentsEntity } from './doctor-appointments.entity';


@Entity('doctor')
export class DoctorEntity{

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

@OneToOne(() => DoctorAppointmentsEntity, doctorappointments => doctorappointments.doc, { cascade:true })
doctorappointments: DoctorAppointmentsEntity;

@OneToMany(() => ManagerEntity, manager => manager.dr, { cascade:true })
managers: ManagerEntity[];
}
