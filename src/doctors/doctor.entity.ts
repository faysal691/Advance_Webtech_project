
import { userEntity } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity("Doctor")
export class DoctorEntity
{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;
    @Column()
    username:string;

    @ManyToOne(() => userEntity, admin => admin.doctors)
    admin: userEntity;

}