import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { UserService } from "src/user/user.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { SignUpDto } from "./dto/signup.dto";
import { SignInDto } from "./dto/signin.dto";
import { User } from "@prisma/client";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private prisma: PrismaService,
    ) { }

    private generatePayload(user: User) {
        return { email: user.email, name: user.name, sub: user.id };
    }

    async register(data: SignUpDto): Promise<any> {
        const exists = await this.prisma.user.findUnique({ where: { email: data.email } });

        if (exists)
            throw new ConflictException("A user with this email already exists");

        const user = await this.prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                password: await bcrypt.hash(data.password, 10),
            },
        });

        return {
            access_token: this.jwtService.sign(this.generatePayload(user)),
        };

    }

    async signIn(data: SignInDto): Promise<any> {
        const user = await this.prisma.user.findUnique({
            where: { email: data.email }
        });

        if (!user || !(await bcrypt.compare(data.password, user.password))) {
            throw new UnauthorizedException();
        }

        return {
            access_token: this.jwtService.sign(this.generatePayload(user)),
        };
    }
}
