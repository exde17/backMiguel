import { TiempoExtra } from "src/tiempo-extra/entities/tiempo-extra.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Coordinador {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        nullable: false
    })
    nombre: string;

    @Column('text',{
        nullable: true
    })
    apellido: string;

    @Column('text',{
        nullable: false
    })
    documento: string;

    @Column('text',{
        nullable: false
    })
    telefono: string;

    @Column('timestamp',{
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date;

    @Column('timestamp',{
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP'
    })
    updatedAt: Date;

    // @OneToMany(()=> TiempoExtra, tiempoExtra => tiempoExtra.coordinador)
    // tiempoExtra: TiempoExtra[];
}
