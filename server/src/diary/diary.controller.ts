import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { DiaryService } from "./diary.service";
import { CreateDiaryDto } from "./dto/create-diary.dto";
import { UpdateDiaryDto } from "./dto/update-diary.dto";

@Controller("diary")
export class DiaryController {
  constructor(private readonly diaryService: DiaryService) {}

  @Post()
  async create(@Body() createDiaryDto: CreateDiaryDto) {
    return this.diaryService.create(createDiaryDto);
  }

  @Get()
  async findAll() {
    return this.diaryService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.diaryService.findOne(+id);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() updateDiaryDto: UpdateDiaryDto) {
    return this.diaryService.update(+id, updateDiaryDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.diaryService.remove(+id);
  }
}
