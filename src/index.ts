import * as dotenv from "dotenv";
import { AppDataSource } from "./data-source"
import * as express from "express"
import * as cors from "cors"
import { MongoCredentials } from "typeorm";
import { errorHandler } from "./utils/errorHandler";

dotenv.config()
AppDataSource.initialize().then( () => {
    try{
        console.log("DataSource Initialized & Connected succesfully");
    }catch(error){
        console.log("Error while initializing data source", error);
    }

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

}).catch(error => console.log(error))

const portEnv = process.env.PORT;
if(!portEnv){
    console.error("Error: PORT is not defined in .env file");
    process.exit(1);
}

const PORT:number = parseInt(portEnv, 10);
if(isNaN(PORT)){
    console.error("Error: PORT is not a number in .env file");
    process.exit(1);
}

const app = express();
const corsOptions = {
    origin: 
    "*",
    MongoCredentials: true,
    allowedHeaders: "*",
    methods: "GET, HEAD, PUT, PATCH, POST DELETE"
}

app.use(cors(corsOptions))
app.use(express.json())

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    
})