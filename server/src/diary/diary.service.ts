import { Injectable } from "@nestjs/common";
import { CreateDiaryDto } from "./dto/create-diary.dto";
import { UpdateDiaryDto } from "./dto/update-diary.dto";
import { PrismaService } from "src/prisma.service";
import { userSelector } from "src/db/userSelector";

// TODO: auth

const user = { id: "clizzq9my0000vd14i8yn1fph" };
@Injectable()
export class DiaryService {
  constructor(private prisma: PrismaService) { }

  private include = {
    recipe: { include: { ingredients: true } },
    user: { select: userSelector },
  };

  async findAll() {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);

    return this.prisma.diary.findMany({
      include: this.include,
      where: { userId: user.id, date: { gte: start, lte: end } },
    });
  }

  async findOne(id: string) {
    return this.prisma.diary.findUnique({
      where: { id_userId: { id, userId: user.id } },
      include: this.include,
    });
  }

  async create(data: CreateDiaryDto) {
    const diary = this.prisma.diary.create({
      data: {
        date: new Date(data.date),
        recipe: { connect: { id: data.recipeId } },
        user: { connect: { id: user.id } },
      },
      include: this.include,
    });

    return diary;
  }

  async update(id: string, data: UpdateDiaryDto) {
    const diary = this.prisma.diary.update({
      where: { id_userId: { id, userId: user.id } },
      data: {
        date: new Date(data.date),
        recipe: { connect: { id: data.recipeId } },
      },
      include: this.include,
    });

    return diary;
  }

  async remove(id: string) {
    return this.prisma.diary.delete({
      where: { id_userId: { id, userId: user.id } }
    });
  }
}
