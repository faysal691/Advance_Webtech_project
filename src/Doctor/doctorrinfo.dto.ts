import { IsEmpty, IsNotEmpty, IsNumber, IsPositive, IsString, Length, Matches, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("doctor")
export class Doctorinfo{

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @IsString()
    name:string;

    @Column()
    @IsString()
    @Matches(/^[a-z]/)
    username:string;

    @Column()
    @IsString()
    @Length(5)
    @Matches(/^[A-Za-z]+[0-9,@,$]/)
    password:string;

    @Column()
    @IsString()
    address:string;
    
    @Column()
    @IsNumber()
    @IsPositive()
    age:number;

    @Column()
    @IsString()
    specialty:string;
}
export class CreateDoctorDto{
    @IsString()
    name1:string;

    @IsNumber()
    id1:string;

    @IsString()
    specialty1:string;
}
export class UpdateDoctorDto{
    @IsString()
    name2:string;

    @IsNumber()
    id2:string;

    @IsString()
    specialty2:string;
}
