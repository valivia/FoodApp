import { Module } from "@nestjs/common";
import { DiaryService } from "./diary.service";
import { DiaryController } from "./diary.controller";
import { PrismaService } from "src/prisma.service";

@Module({
  controllers: [DiaryController],
  providers: [DiaryService, PrismaService],
})
export class DiaryModule { }
