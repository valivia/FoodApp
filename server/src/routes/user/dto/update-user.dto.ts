import { IsString, IsEmail, IsNumber, Min, Max, IsDateString } from "class-validator";

export class UpdateUserDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    @IsNumber()
    @Min(20)
    @Max(300)
    weight: number;

    @IsNumber()
    @Min(20)
    @Max(300)
    height: number;

    @IsDateString()
    birthday: Date;
}
