import { IsDateString, IsString } from "class-validator";

export class CreateDiaryDto {
    @IsDateString()
    date: Date;

    @IsString()
    recipeId: string;
}
