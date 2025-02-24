import { Request, Response, NextFunction } from "express";
import { UserServiceImpl } from "../service/implementation/user.service.impl";
import { CreateUserDTO } from "../dto/createUser.dto";

export class UserController {
    private userService: UserServiceImpl

    constructor(){
        this.userService = new UserServiceImpl()
    }

    public createUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try{
            const userData = req.body as CreateUserDTO;
            const newData = await this.userService.createUser(userData);
            res.status(201).json(newData)
        }catch(error){
            next(error)
        }
    }

    public getUserById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try{
            const user = parseInt(req.params.ObjectId)
            // const userData = await this.userService.getUserById(user)
        }catch(error){
            next(error)
        }
    }
}