import { IsDateString, IsEmail, IsNumber, IsString, IsStrongPassword, Max, Min } from "class-validator";

export class SignUpDto {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword(
        { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 },
        { message: "Password requires at least 8 characters, 1 lowercase, 1 uppercase, 1 number and 1 symbol" }
    )
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
