import { Controller, Get, Body, Put, Delete, UseGuards, Req, UnauthorizedException, NotFoundException } from "@nestjs/common";
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
      throw new UnauthorizedException("Invalid credentials");

    const user = await this.userService.findOne(req.user?.sub);

    if (!user)
      throw new NotFoundException("User doesnt exist");

    return user;
  }

  @Put()
  async update(@Req() req: RequestWithUser, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(req.user.sub, updateUserDto);
  }

  @Delete()
  async remove(@Req() req: RequestWithUser) {
    return await this.userService.remove(req.user.sub);
  }
}
