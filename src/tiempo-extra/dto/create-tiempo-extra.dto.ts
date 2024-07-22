import { IsArray, IsString } from "class-validator";
import { Tecnico } from "src/tecnico/entities/tecnico.entity";

export class CreateTiempoExtraDto {
    @IsString()
    tiket: string;

    @IsString()
    localidad: string;

    @IsString()
    fechaInicio: string;

    @IsString()
    fechaFin: string;

    @IsString()
    proceso: string;

    @IsArray()
    tecnicos: string[];

    @IsString()
    cordinador: Tecnico;

    @IsString()
    obsevacions: string;
}
