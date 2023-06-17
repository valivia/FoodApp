import { Injectable } from "@nestjs/common";
import { CreateDiaryDto } from "./dto/create-diary.dto";
import { UpdateDiaryDto } from "./dto/update-diary.dto";

@Injectable()
export class DiaryService {
  async create(createDiaryDto: CreateDiaryDto) {
    return "This action adds a new diary";
  }

  async findAll() {
    return `This action returns all diary`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} diary`;
  }

  async update(id: number, updateDiaryDto: UpdateDiaryDto) {
    return `This action updates a #${id} diary`;
  }

  async remove(id: number) {
    return `This action removes a #${id} diary`;
  }
}
