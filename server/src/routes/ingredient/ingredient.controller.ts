import { Controller, Get, NotFoundException, Param, UseGuards } from "@nestjs/common";
import { IngredientService } from "./ingredient.service";
import { AuthGuard } from "../auth/auth.guard";

@Controller("ingredient")
@UseGuards(AuthGuard)
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) { }

  @Get()
  async findAll() {
    return await this.ingredientService.findAll();
  }

  @Get("search/:name")
  async findByName(@Param("name") name: string) {
    const ingredients = await this.ingredientService.findByName(name);
    return ingredients;
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    const ingredient = await this.ingredientService.findById(id);
    if (!ingredient) {
      throw new NotFoundException("Ingredient not found");
    }
    return ingredient;
  }
}
