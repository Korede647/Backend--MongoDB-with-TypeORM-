import { MongoClient } from "mongodb";

let db: MongoClient;

declare global {
    var __db: MongoClient | undefined;
}

if (!global.__db) {
    global.__db = new MongoClient(process.env.DATABASE_URL);
}

db = global.__db;

export { db };