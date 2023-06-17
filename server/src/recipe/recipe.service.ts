import { Injectable } from "@nestjs/common";
import { CreateRecipeDto } from "./dto/create-recipe.dto";
import { UpdateRecipeDto } from "./dto/update-recipe.dto";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    return `This action returns all recipe`;
  }

  async findByName(name: string) {
    return this.prisma.recipe.findMany({
      where: { name: { mode: "insensitive", startsWith: name } },
      include: { ingredients: true },
      take: 10,
    });
  }

  async findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  async create(createRecipeDto: CreateRecipeDto) {
    return "This action adds a new recipe";
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  async remove(id: string) {
    return `This action removes a #${id} recipe`;
  }
}
