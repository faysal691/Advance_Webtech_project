import { ManagerEntity } from 'src/manager/manager.entity';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany} from 'typeorm';
@Entity("admin")
export class AdminEntity{
@PrimaryGeneratedColumn()
id: number;
@Column()
name: string;
@Column()
username:string;
@Column()
password: string;
@Column()
address: string;
@Column()
filenames:string;
@OneToMany(() => ManagerEntity, manager => manager.admin, { cascade: true })
managers: ManagerEntity[];

}
