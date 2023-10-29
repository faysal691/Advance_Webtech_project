import { IsNotEmpty, IsNumber, IsPositive, IsString, Length, Matches } from "class-validator";

export class doctorAppointments {

    name:string;
    
    date: string;

    time: string;

}