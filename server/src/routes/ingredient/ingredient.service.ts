import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class IngredientService {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    return this.prisma.ingredient.findMany();
  }

  async findByName(name: string) {
    return this.prisma.ingredient.findMany({
      where: { name: { mode: "insensitive", startsWith: name } },
      include: { nutrients: true },
      take: 10
    });
  }

  async findById(id: string) {
    return this.prisma.ingredient.findUnique({
      where: { id },
      include: { nutrients: true }
    });
  }
}
