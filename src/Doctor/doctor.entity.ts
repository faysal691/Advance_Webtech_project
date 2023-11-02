import { patientEntity } from 'src/patient/patient.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, ManyToMany, JoinTable} from 'typeorm';
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

@ManyToMany(() => patientEntity, patient => patient.dr,{ cascade:true })
patients: patientEntity[];

@ManyToMany(() => patientEntity, patient => patient.dc)
@JoinTable()
patient: patientEntity[];

@OneToMany(() => DoctorAppointmentsEntity, doctorappointments => doctorappointments.doc, { cascade:true })
doctorappointments: DoctorAppointmentsEntity;

}
