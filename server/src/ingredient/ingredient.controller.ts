import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { IngredientService } from "./ingredient.service";

@Controller("ingredient")
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) { }

  @Get()
  async findAll() {
    return await this.ingredientService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    const ingredient = await this.ingredientService.findOne(id);
    if (!ingredient) {
      throw new NotFoundException("Ingredient not found");
    }
    return ingredient;
  }
}
