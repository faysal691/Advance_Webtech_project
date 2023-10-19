import { ManagerEntity } from 'src/manager/manager.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';


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

@OneToMany(() => ManagerEntity, manager => manager.doctor, { cascade:true })
managers: ManagerEntity[];
}
