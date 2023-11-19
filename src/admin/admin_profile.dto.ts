import { IsNotEmpty, IsNumber, IsPositive, IsString, Length, Matches } from "class-validator";

export class AdminProfile {
	name : string;
	password: string;
	address: string;
	email:string
}