import { IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateDiaryDto {
    @IsOptional()
    @IsNumber()
    @Min(0)
    quantity: number;

    @IsString()
    recipeId: string;
}
