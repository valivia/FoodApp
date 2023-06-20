import { Injectable } from "@nestjs/common";
import { CreateDiaryDto } from "./dto/create-diary.dto";
import { UpdateDiaryDto } from "./dto/update-diary.dto";
import { PrismaService } from "src/prisma.service";
import { publicUserSelector } from "src/db/userSelector";

@Injectable()
export class DiaryService {
  constructor(private prisma: PrismaService) { }

  private include = {
    recipe: {
      include: {
        ingredients: {
          include: { ingredient: { include: { nutrients: true } } }
        }
      }
    },
    user: { select: publicUserSelector },
  };

  async findAll(userId: string) {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);

    return this.prisma.diary.findMany({
      include: this.include,
      where: { userId, date: { gte: start, lte: end } },
    });
  }

  async findOne(id: string, userId: string) {
    return this.prisma.diary.findUnique({
      where: { id_userId: { id, userId } },
      include: this.include,
    });
  }

  async create(data: CreateDiaryDto, userId: string) {
    const diary = this.prisma.diary.create({
      data: {
        date: new Date(data.date),
        recipe: { connect: { id: data.recipeId } },
        user: { connect: { id: userId } },
      },
      include: this.include,
    });

    return diary;
  }

  async update(id: string, data: UpdateDiaryDto, userId: string) {
    const diary = this.prisma.diary.update({
      where: { id_userId: { id, userId } },
      data: {
        date: new Date(data.date),
        recipe: { connect: { id: data.recipeId } },
      },
      include: this.include,
    });

    return diary;
  }

  async remove(id: string, userId: string) {
    return this.prisma.diary.delete({
      where: { id_userId: { id, userId } }
    });
  }
}
