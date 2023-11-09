import { IsEmail, IsEmpty, IsInt, IsNumber, IsPhoneNumber, IsString, Length, Matches, MaxLength, MinLength } from "class-validator";

export  class AdminInfo{
	@IsString()
    name : string;
	username:string;
	password: string;
	address: string;
	filenames:string;
    
}

 /*export  class AdminInfo{
	@IsNumber()
    name : string;
	@IsString()
	
     id:string;
	username: string;
	@MinLength(7)
	@Matches(/^[0-9]+$/)
	password: string;

	
	phone:string;
	@IsEmail()
	email:string
	address: string;
	@IsInt()
	age: number;
}*/
 export class doctor{
	@IsEmpty()
	doctorname : string;
	username1: string;
	password1: string;
	address1: string;
	age1: number;
   


 }
 export class provideDoctor{
    @IsString()
    name2:string;

    @IsNumber()
    id2:string;

    @IsString()
    specialty2:string;
}