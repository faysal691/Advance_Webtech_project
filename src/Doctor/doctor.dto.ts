import { IsNotEmpty, IsNumber, IsPositive, IsString, Length, Matches } from "class-validator";

export class Doctorinfo {

    @IsNotEmpty() 
    @IsString()
    name: string;

    // @IsString()
    // @Matches(/^[a-z,0-9]/)
    username: string;

    @IsString()
    @Length(5)
    @Matches(/^[A-Za-z]+[0-9,@,$]/)
    password: string;

    @IsString()
    address: string;

    // @IsNumber()
    // @IsPositive()
    age: number;

    @IsString()
    specialty: string;

    filename:string;
} 

