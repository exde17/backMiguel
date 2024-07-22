import { Injectable } from '@nestjs/common';
import { CreateTiempoExtraDto } from './dto/create-tiempo-extra.dto';
import { UpdateTiempoExtraDto } from './dto/update-tiempo-extra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TiempoExtra } from './entities/tiempo-extra.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TiempoExtraService {
  @InjectRepository(TiempoExtra)
  private readonly tiempoExtraRepository: Repository<TiempoExtra>
  async create(createTiempoExtraDto: CreateTiempoExtraDto) {
    try {
      const tiempoExtra = this.tiempoExtraRepository.create(createTiempoExtraDto)
      await this.tiempoExtraRepository.save(tiempoExtra)
      return{
        message: 'Tiempo extra creado con exito',
        // data: tiempoExtra
      }
    } catch (error) {
      console.log(error)
      return{
        message: 'Error al crear el tiempo extra',
        error: error.message
      }
      
    }
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
