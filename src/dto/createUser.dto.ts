import { IsNotEmpty } from "class-validator";

export class CreateUserDTO{
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    age: number;
}