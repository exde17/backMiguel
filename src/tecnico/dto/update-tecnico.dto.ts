import { PartialType } from '@nestjs/mapped-types';
import { CreateTecnicoDto } from './create-tecnico.dto';

export class UpdateClienteDto extends PartialType(CreateTecnicoDto) {}
