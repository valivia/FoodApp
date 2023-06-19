import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { SignUpDto } from "./dto/signup.dto";
import { SignInDto } from "./dto/signin.dto";
import { User } from "@prisma/client";
import { Response } from "express";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private prisma: PrismaService,
    ) { }

    private generatePayload(user: User) {
        return this.jwtService.sign({ email: user.email, name: user.name, sub: user.id });
    }

    async register(res: Response, data: SignUpDto): Promise<any> {
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

        res.cookie("session",
            this.generatePayload(user),
            { secure: true, signed: true, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 }
        );

        return;

    }

    async signIn(res: Response, data: SignInDto): Promise<any> {
        const user = await this.prisma.user.findUnique({
            where: { email: data.email }
        });

        if (!user || !(await bcrypt.compare(data.password, user.password))) {
            throw new UnauthorizedException();
        }

        res.cookie("session",
            this.generatePayload(user),
            { secure: true, signed: true, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 }
        );

        return;
    }
}
