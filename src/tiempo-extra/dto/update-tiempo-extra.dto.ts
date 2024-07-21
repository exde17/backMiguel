import { PartialType } from '@nestjs/mapped-types';
import { CreateTiempoExtraDto } from './create-tiempo-extra.dto';

export class UpdateTiempoExtraDto extends PartialType(CreateTiempoExtraDto) {}
