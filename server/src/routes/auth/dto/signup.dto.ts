import { IsDateString, IsEmail, IsNumber, IsString, IsStrongPassword, Max, Min } from "class-validator";

export class SignUpDto {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword()
    password: string;

    @IsNumber()
    weight: number;

    @IsNumber()
    @Min(20)
    @Max(300)
    height: number;

    @IsDateString()
    birthday: Date;
}
