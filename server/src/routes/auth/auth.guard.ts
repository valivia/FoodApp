import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { IS_PUBLIC_KEY } from "./auth.decorator";
import { CookieOptions } from "express";


export const cookieConfig: CookieOptions = {
    secure: true,
    signed: true,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    sameSite: "none",
    domain: "localhost",
    path: "/",
};


export interface RequestWithUser extends Request {
    user?: any;
}

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private reflector: Reflector
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        // Check if public.
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) return true;


        const request = context.switchToHttp().getRequest();
        const token = request.signedCookies["session"];

        if (!token) {
            throw new UnauthorizedException();
        }

        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                { secret: "TODO" }
            );

            request["user"] = payload;
        } catch {
            throw new UnauthorizedException();
        }
        return true;
    }
}