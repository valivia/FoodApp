import { Body, Request, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/signin.dto";
import { SignUpDto } from "./dto/signup.dto";
import { Public } from "./auth.decorator";
import { Response } from "express";
import { AuthGuard } from "./auth.guard";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) { }


    @Public()
    @Post("login")
    async signIn(@Res({ passthrough: true }) res: Response, @Body() data: SignInDto) {
        return await this.authService.signIn(res, data);
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post("register")
    async register(@Res({ passthrough: true }) req: Response, @Body() data: SignUpDto) {
        return await this.authService.register(req, data);
    }

    @Get("profile")
    @UseGuards(AuthGuard)
    getProfile(@Request() req: any) {
        return req.user;
    }
}
