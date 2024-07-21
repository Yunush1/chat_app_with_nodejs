import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, CreateDateColumn, ObjectIdColumn, BaseEntity} from "typeorm"
import {TextMessageEntity} from "./text-message-entity";
import { ObjectId } from "mongodb";

@Entity({name: "user"})
export class UserEntity  {

    // @ObjectIdColumn()
    // _id :ObjectId
    
    @PrimaryGeneratedColumn({unsigned: true})
    userId: number

    @CreateDateColumn()
    createdAt: Date

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({unique: true})
    email: string

    @Column({name: "password_hash"})
    passwordHash: string

    @Column({name: "refresh_token_hash", nullable: true})
    refreshTokenHash?: string

    @OneToMany(type => TextMessageEntity, (message) => message.sender, {lazy: true})
    messagesSent:Promise<TextMessageEntity[]>

    @OneToMany(type => TextMessageEntity, (message) => message.receiver, {lazy: true})
    messagesReceived:Promise<UserEntity[]>

}


function Field(arg0: () => any): (target: UserEntity, propertyKey: "userId") => void {
    throw new Error("Function not implemented.");
}

