import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from "@nestjs/common";
import { DiaryService } from "./diary.service";
import { CreateDiaryDto } from "./dto/create-diary.dto";
import { UpdateDiaryDto } from "./dto/update-diary.dto";
import { AuthGuard, RequestWithUser } from "src/routes/auth/auth.guard";

@Controller("diary")
@UseGuards(AuthGuard)
export class DiaryController {
  constructor(private readonly diaryService: DiaryService) { }


  @Get()
  async findAll(@Req() req: RequestWithUser) {
    return await this.diaryService.findAll(req.user.sub);
  }

  @Get(":id")
  async findOne(@Param("id") id: string, @Req() req: RequestWithUser) {
    return this.diaryService.findOne(id, req.user.sub);
  }

  @Post()
  async create(@Body() createDiaryDto: CreateDiaryDto, @Req() req: RequestWithUser) {
    return await this.diaryService.create(createDiaryDto, req.user.sub);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() updateDiaryDto: UpdateDiaryDto, @Req() req: RequestWithUser) {
    return this.diaryService.update(id, updateDiaryDto, req.user.sub);
  }

  @Delete(":id")
  async remove(@Param("id") id: string, @Req() req: RequestWithUser) {
    return this.diaryService.remove(id, req.user.sub);
  }
}
