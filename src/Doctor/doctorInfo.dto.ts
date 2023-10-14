import { IsEmpty, IsNotEmpty, IsNumber, IsPositive, IsString, Length, Matches, MinLength } from "class-validator";

export class Doctorinfo {

    @IsNotEmpty() 
    @IsString()
    name: string;

    @IsString()
    @Matches(/^[a-z,0-9]/)
    username: string;

    @IsString()
    @Length(5)
    @Matches(/^[A-Za-z]+[0-9,@,$]/)
    password: string;

    @IsString()
    address: string;

    @IsNumber()
    @IsPositive()
    age: number;

    // @IsString()
    // specialty: string;

    @IsString()
    filename:string;
} 
export class CreateDoctorDto {
    name: string;
    username: string;
    password: string;
    address: string;
    age: number;
}
export class UpdateDoctorDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    @IsPositive()
    id: number;

    @IsString()
    @Matches(/^[a-z,0-9]/)
    username: string;

    @IsString()
    @Length(5)
    @Matches(/^[A-Za-z]+[0-9,@,$]/)
    password: string;

    @IsString()
    address: string;

    @IsNumber()
    @IsPositive()
    age: number;

    @IsString()
    specialty: string;
}
export class DeleteDoctorDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    @IsPositive()
    id: number;

    @IsString()
    @Matches(/^[a-z,0-9]/)
    username: string;

    @IsString()
    @Length(5)
    @Matches(/^[A-Za-z]+[0-9,@,$]/)
    password: string;

    @IsString()
    address: string;

    @IsNumber()
    @IsPositive()
    age: number;

    @IsString()
    specialty: string;
}
