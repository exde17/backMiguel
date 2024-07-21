import { Injectable } from '@nestjs/common';
import { CreateTiempoExtraDto } from './dto/create-tiempo-extra.dto';
import { UpdateTiempoExtraDto } from './dto/update-tiempo-extra.dto';

@Injectable()
export class TiempoExtraService {
  create(createTiempoExtraDto: CreateTiempoExtraDto) {
    return 'This action adds a new tiempoExtra';
  }

  findAll() {
    return `This action returns all tiempoExtra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tiempoExtra`;
  }

  update(id: number, updateTiempoExtraDto: UpdateTiempoExtraDto) {
    return `This action updates a #${id} tiempoExtra`;
  }

  remove(id: number) {
    return `This action removes a #${id} tiempoExtra`;
  }
}
