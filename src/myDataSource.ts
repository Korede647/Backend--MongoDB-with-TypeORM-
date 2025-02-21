import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mongodb",
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    synchronize: true,
    
})
