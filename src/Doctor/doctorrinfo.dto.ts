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
    name1:string;
    id1:string;
    specialty1:string;
}
export class UpdateDoctorDto{
    name2:string;
    id2:string;
    specialty2:string;
}
