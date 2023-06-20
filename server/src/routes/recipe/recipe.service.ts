import { Injectable } from "@nestjs/common";
import { CreateRecipeDto } from "./dto/create-recipe.dto";
import { UpdateRecipeDto } from "./dto/update-recipe.dto";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) { }

  private readonly include = {
    ingredients: {
      include: { ingredient: { include: { nutrients: true } } }
    }
  };

  async findAll(id: string) {
    return this.prisma.recipe.findMany({
      include: this.include,
      where: {
        OR: [{ userId: id }, { userId: null }],
      }
    });
  }

  async findByName(name: string) {
    return this.prisma.recipe.findMany({
      where: { name: { mode: "insensitive", startsWith: name } },
      include: this.include,
      take: 10,
    });
  }

  async findOne(id: string) {
    return this.prisma.recipe.findUnique({
      where: { id },
      include: this.include,
    });
  }

  async create(data: CreateRecipeDto) {

    const ingredients = data.ingredients.map((ingredient) => ({
      quantity: ingredient.quantity,
      ingredient: { connect: { id: ingredient.id } },
    }));

    const recipe = this.prisma.recipe.create({
      include: this.include,
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
      include: this.include,
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
