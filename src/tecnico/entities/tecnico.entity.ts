
import { IsEmail, MinLength } from "class-validator";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tecnico {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    // @Column('text', {
    //     nullable: false
    // })
    // nombre: string;

    // @Column('text', {
    //     nullable: true
    // })
    // apellido: string;

    @Column('text', {
        nullable: false
    })
    documento: string;

    @Column('text', {
        nullable: false
    })
    telefono: string;

    @Column('text', {
        nullable: false,
        name: 'first_name',
    })
    firstName: string;

    @Column('text', {
        nullable: true,
        name: 'last_name',
    })
    lastName: string;

    // @Column('text', {
    //     nullable: false,
    //     unique: true,
    // })
    // @IsEmail()
    // email: string;

    // @Column('text', {
    //     nullable: false,
    //     select: false,
    // })
    // @MinLength(8)
    // password: string;

    @Column('text',{
        nullable: false
    })
    cargo: string;

    @ManyToOne(()=> User, user => user.tecnico)
    user: User;

    @Column('timestamp', {
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date;

    @Column('timestamp', {
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP'
    })
    updatedAt: Date;

}



