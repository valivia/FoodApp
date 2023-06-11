import { Controller, Get, Param } from "@nestjs/common";
import { IngredientService } from "./ingredient.service";

@Controller("ingredient")
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) { }

  @Get()
  findAll() {
    return this.ingredientService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.ingredientService.findOne(+id);
  }
}
