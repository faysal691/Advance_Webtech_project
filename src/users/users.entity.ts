import { DoctorEntity } from "src/doctors/doctor.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class userEntity{
@PrimaryGeneratedColumn()
id: number;
@Column()
name: string;
@Column()
username: string;
@Column()
password: string;
@OneToMany(() => DoctorEntity, doctor => doctor.admin, { cascade: true })
     doctors: DoctorEntity[];
}
