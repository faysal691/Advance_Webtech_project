import { IsEmpty, IsNumber, IsString, Length } from "class-validator";

export class Doctorinfo{
    @IsString()
    name:string;

    @IsString()
    username:string;

    @IsString()
    @Length(4)
    password:string;

    @IsString()
    address:string;
    
    @IsNumber()
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
