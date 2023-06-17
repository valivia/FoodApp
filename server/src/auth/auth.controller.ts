import { Body, Request, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/signin.dto";
import { SignUpDto } from "./dto/signup.dto";
import { AuthGuard } from "./auth.guard";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) { }


    @HttpCode(HttpStatus.OK)
    @Post("login")
    async signIn(@Body() data: SignInDto) {
        return await this.authService.signIn(data);
    }

    @Post("register")
    async register(@Body() data: SignUpDto) {
        return await this.authService.register(data);
    }

    @UseGuards(AuthGuard)
    @Get("profile")
    getProfile(@Request() req: any) {
        return req.user;
    }
}
