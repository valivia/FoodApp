import { IsString, IsEmail, IsNumber, Min, Max } from "class-validator";

export class UpdateUserDto {
    @IsString()
    name: string;

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
}
