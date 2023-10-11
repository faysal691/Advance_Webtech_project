import { IsEmpty, IsNotEmpty, IsNumber, IsPositive, IsString, Length, Matches, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class Doctorinfo{

    @IsNotEmpty()
    @IsString()
    name:string;

    @IsString()
    @Matches(/^[a-z]/)
    username:string;

    @IsString()
    @Length(5)
    @Matches(/^[A-Za-z]+[0-9,@,$]/)
    password:string;

    @IsString()
    address:string;
    
    @IsNumber()
    @IsPositive()
    age:number;

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
