import { Coordinador } from "src/coordinador/entities/coordinador.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TiempoExtra {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        nullable: false
    })
    tiket: string;

    @Column('text',{
        nullable: false
    })
    localidad: string;

    @Column('text',{
        nullable: false,
        name: 'fecha_inicio'
    })
    fechaInicio: string;

    @Column('text',{
        nullable: false,
        name: 'fecha_fin'
    })
    fechaFin: string;

    @Column('text',{
        nullable: false
    })
    proceso: string;

    @Column('text',{
        nullable: false
    })
    tecnicos: string[];

    @ManyToOne(()=> Coordinador, coordinador => coordinador.tiempoExtra)
    coordinador: Coordinador;

    @Column('text',{
        nullable: false
    })
    obsevacions: string;
    
}
