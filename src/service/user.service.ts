import { CreateUserDTO } from "../dto/createUser.dto";
import { User } from "../entity/User";

export interface UserService {
    createUser(data: CreateUserDTO): Promise<User>
    getUserById(id: number): Promise<User | null>
    getAllUsers(): Promise<User[]>
}