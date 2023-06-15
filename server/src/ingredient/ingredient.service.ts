import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class IngredientService {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    return this.prisma.ingredient.findMany();
  }

  findOne(id: string) {
    return this.prisma.ingredient.findUnique({
      where: { id },
      include: { nutrients: true, recipes: true }
    });
  }
}
