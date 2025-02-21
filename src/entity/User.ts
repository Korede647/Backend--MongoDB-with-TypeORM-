import { Entity, ObjectIdColumn, ObjectId, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {

    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id: ObjectId

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column()
    email: string

}
