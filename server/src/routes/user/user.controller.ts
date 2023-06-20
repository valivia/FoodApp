import { Controller, Get, Body, Put, Param, Delete, UseGuards, Req, UnauthorizedException } from "@nestjs/common";
import { UserService } from "./user.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AuthGuard, RequestWithUser } from "../auth/auth.guard";

@Controller("user")
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async findOwn(@Req() req: RequestWithUser) {
    if (!req.user?.sub)
      return new UnauthorizedException("Invalid credentials");
    return this.userService.findOne(req.user?.sub);
  }

  @Put()
  async update(@Req() req: RequestWithUser, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(req.user.sub, updateUserDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }
}
