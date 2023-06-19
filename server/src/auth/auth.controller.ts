import { Body, Request, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/signin.dto";
import { SignUpDto } from "./dto/signup.dto";
import { Public } from "./auth.decorator";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) { }


    @Public()
    @HttpCode(HttpStatus.OK)
    @Post("login")
    async signIn(@Body() data: SignInDto) {
        return await this.authService.signIn(data);
    }

    @Public()
    @Post("register")
    async register(@Body() data: SignUpDto) {
        return await this.authService.register(data);
    }

    @Get("profile")
    getProfile(@Request() req: any) {
        return req.user;
    }
}
