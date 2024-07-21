import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTecnicoDto {
    @IsString()
    readonly nombre: string;

    @IsString()
    @IsOptional()
    readonly apellido?: string;

    @IsString()
    // @IsOptional()
    readonly documento: string;

    @IsString()
    // @IsOptional()
    readonly telefono: string;

}
