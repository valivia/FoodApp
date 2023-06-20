import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from "@nestjs/common";
import { RecipeService } from "./recipe.service";
import { CreateRecipeDto } from "./dto/create-recipe.dto";
import { UpdateRecipeDto } from "./dto/update-recipe.dto";
import { AuthGuard, RequestWithUser } from "../auth/auth.guard";

@Controller("recipe")
@UseGuards(AuthGuard)
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) { }

  @Get()
  async findAll(@Req() req: RequestWithUser) {
    return await this.recipeService.findAll(req.user?.sub);
  }

  @Get("search/:name")
  async findByName(@Param("name") name: string) {
    return await this.recipeService.findByName(name);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.recipeService.findOne(id);
  }

  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDto) {
    return await this.recipeService.create(createRecipeDto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return await this.recipeService.update(id, updateRecipeDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.recipeService.remove(id);
  }
}
