import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTecnicoDto {
    @IsString()
    readonly firstName: string;

    @IsString()
    @IsOptional()
    readonly lastName?: string;

    @IsString()
    // @IsOptional()
    readonly documento: string;

    @IsString()
    // @IsOptional()
    readonly telefono: string;

    @IsString()
    readonly email: string;

    @IsString()
    readonly password: string;

    @IsString()
    readonly cargo: string;

}
