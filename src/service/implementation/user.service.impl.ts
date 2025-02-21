import { Db } from "typeorm";
import { CreateUserDTO } from "../../dto/createUser.dto";
import { User } from "../../entity/User";
import { UserService } from "../user.service";
import { db } from "../../config/db";
import { CustomError } from "../../exceptions/CustomError.error";

export class UserServiceImpl implements UserService{
    async createUser(data: CreateUserDTO): Promise<User> {
        throw new Error("Method not implemented")
    }
    async getUserById(id: number): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    async getAllUsers(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    async updateUser(id: number, data: Partial<CreateUserDTO>): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async deleteUser(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}