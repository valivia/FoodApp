import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaService } from "src/prisma.service";
import { UserModule } from "src/routes/user/user.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
  ],
  exports: [AuthService],
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: "TODO",
      signOptions: { expiresIn: "7d" },
    })
  ]
})
export class AuthModule { }
