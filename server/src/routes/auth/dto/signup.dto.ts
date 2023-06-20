import { IsStrongPassword } from "class-validator";
import { UpdateUserDto } from "src/routes/user/dto/update-user.dto";

export class SignUpDto extends UpdateUserDto {
    @IsStrongPassword(
        { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 },
        { message: "Password requires at least 8 characters, 1 lowercase, 1 uppercase, 1 number and 1 symbol" }
    )
    password: string;
}
