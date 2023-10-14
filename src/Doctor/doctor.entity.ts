import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn} from 'typeorm';

@Entity("doctor")
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
filename: string;

// @Column()
// filename: string;

}
