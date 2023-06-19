import { Type } from "class-transformer";
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested, isArray } from "class-validator";


export class CreateRecipeDto {
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RecipeIngredientDto)
    ingredients: RecipeIngredientDto[];
}


export class RecipeIngredientDto {
    @IsString()
    id: string;

    @IsNumber()
    quantity: number;
}

