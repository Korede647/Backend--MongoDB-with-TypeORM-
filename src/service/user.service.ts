import { ObjectId } from "typeorm";
import { CreateUserDTO } from "../dto/createUser.dto";
import { User } from "../entity/User";

export interface UserService {
    createUser(data: CreateUserDTO): Promise<User>
    getUserById(id: ObjectId): Promise<User | null>
    getAllUsers(): Promise<User[]>
    updateUser(id: ObjectId, data: Partial<CreateUserDTO>): Promise<User>
    deleteUser(id: ObjectId): Promise<void>
}