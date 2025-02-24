import { Db } from "typeorm";
import { CreateUserDTO } from "../../dto/createUser.dto";
import { User } from "../../entity/User";
import { UserService } from "../user.service";
import { db } from "../../config/db";
import { CustomError } from "../../exceptions/CustomError.error";
import { AppDataSource } from "../../myDataSource";
import { ObjectId } from "typeorm";

export class UserServiceImpl implements UserService{
    async createUser(data: CreateUserDTO): Promise<User> {
        const isUserExists = await AppDataSource.getRepository(User).findOne({
            where: {
                email: data.email
            },
          })

        if(isUserExists){
            throw new CustomError(409, "Email already exists")
        }

        const user = await AppDataSource.getRepository(User).create({
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                age: data.age
        })
        return user
    }
    
    async getUserById(id: ObjectId): Promise<User | null> {
        const user = await AppDataSource.getRepository(User).findOneBy({
                id: id
        })
        if(!user) {
            throw new CustomError(404, "User with id does not exist")
        }
        return user;
    }

    async getAllUsers(): Promise<User[]> {
        const user = await AppDataSource.getRepository(User).find()
         return user;
    }

    async updateUser(id: ObjectId, data: Partial<CreateUserDTO>): Promise<User> {
        const user = await AppDataSource.getRepository(User).findOneBy({
            id: id
        })
        if(!user){
            throw new CustomError(404, "User with id does not exist")
        }
        await AppDataSource.getRepository(User).update({
            id,
         },
        data
    )
        return user
    }

    async deleteUser(id: ObjectId): Promise<void> {
        const user = await AppDataSource.getRepository(User).findOneBy({
            id
        })
        if(!user){
            throw new CustomError(404, "User not found")
        }
        await AppDataSource.getRepository(User).delete({
            id
        })
    }

}