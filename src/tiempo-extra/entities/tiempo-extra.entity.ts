import { Coordinador } from "src/coordinador/entities/coordinador.entity";
import { Tecnico } from "src/tecnico/entities/tecnico.entity";
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
        nullable: false,
        // array: true
    })
    tecnicos: string[];

    @ManyToOne(()=> Tecnico, tecnico => tecnico.tiempoExtra)
    cordinador: Tecnico;

    @Column('text',{
        nullable: false
    })
    obsevacions: string;
    
}
