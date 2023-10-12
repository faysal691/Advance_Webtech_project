import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('doctor')
export class DoctorEntity{

@PrimaryGeneratedColumn()
id: number;

@Column({name: "fullname" , type:"int"})
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

}
