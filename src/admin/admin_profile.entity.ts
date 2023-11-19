import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AdminEntity } from "./admin.entity";

@Entity('profiles')
export class AdminProfileEntity{

@PrimaryGeneratedColumn()
id: number;

@Column()
name : string;
@Column()
	password: string;
	@Column()
	address: string;
	@Column()
	email:string
	@OneToOne(() => AdminEntity, adminEntity => adminEntity.adminProfile)
admin: AdminEntity;

	
}