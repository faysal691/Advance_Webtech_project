import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity("doctor")
export class DoctorEntity{
@PrimaryGeneratedColumn()
username: string;
@Column()
name: string;
@Column()
password: string;
@Column()
address: string;
@Column()
age: number;
@Column()
specialty: string;
}
