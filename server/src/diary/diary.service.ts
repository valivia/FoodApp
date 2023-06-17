import { Injectable } from "@nestjs/common";
import { CreateDiaryDto } from "./dto/create-diary.dto";
import { UpdateDiaryDto } from "./dto/update-diary.dto";
import { PrismaService } from "src/prisma.service";
import { userSelector } from "src/db/userSelector";

// TODO: auth

@Injectable()
export class DiaryService {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    return `This action returns all diary`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} diary`;
  }

  async create(createDiaryDto: CreateDiaryDto) {
    const data = this.prisma.diary.create({
      data: {
        date: new Date(createDiaryDto.date),
        recipe: { connect: { id: createDiaryDto.recipeId } },
        user: { connect: { id: "clizzq9my0000vd14i8yn1fph" } },
      },
      include: {
        recipe: { include: { ingredients: true } },
        user: { select: userSelector },
      }
    });

    return data;
  }

  async update(id: number, updateDiaryDto: UpdateDiaryDto) {
    return `This action updates a #${id} diary`;
  }

  async remove(id: number) {
    return `This action removes a #${id} diary`;
  }
}
