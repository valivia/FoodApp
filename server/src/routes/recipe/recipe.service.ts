import { Injectable } from "@nestjs/common";
import { CreateRecipeDto } from "./dto/create-recipe.dto";
import { UpdateRecipeDto } from "./dto/update-recipe.dto";
import { PrismaService } from "src/prisma.service";


// TODO: auth

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) { }

  async findAll(id: string) {
    return this.prisma.recipe.findMany({
      include: { ingredients: true },
      where: { userId: id },
    });
  }

  async findByName(name: string) {
    return this.prisma.recipe.findMany({
      where: { name: { mode: "insensitive", startsWith: name } },
      include: { ingredients: true },
      take: 10,
    });
  }

  async findOne(id: string) {
    return this.prisma.recipe.findUnique({
      where: { id },
      include: { ingredients: true },
    });
  }

  async create(data: CreateRecipeDto) {

    const ingredients = data.ingredients.map((ingredient) => ({
      quantity: ingredient.quantity,
      ingredient: { connect: { id: ingredient.id } },
    }));

    const recipe = this.prisma.recipe.create({
      include: { ingredients: true },
      data: {
        name: data.name,
        description: data.description,
        ingredients: { create: ingredients },
      },
    });

    return recipe;
  }

  async update(id: string, data: UpdateRecipeDto) {

    const ingredients = data.ingredients.map((ingredient) => ({
      quantity: ingredient.quantity,
      ingredient: { connect: { id: ingredient.id } },
    }));

    const recipe = this.prisma.recipe.update({
      include: { ingredients: true },
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        ingredients: { create: ingredients },
      },
    });

    return recipe;
  }

  async remove(id: string) {
    return this.prisma.recipe.delete({ where: { id } });
  }
}
