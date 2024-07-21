import { Module } from '@nestjs/common';
import { CoordinadorService } from './coordinador.service';
import { CoordinadorController } from './coordinador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coordinador } from './entities/coordinador.entity';
import { TiempoExtra } from 'src/tiempo-extra/entities/tiempo-extra.entity';

@Module({
  controllers: [CoordinadorController],
  providers: [CoordinadorService],
  imports: [TypeOrmModule.forFeature([Coordinador, TiempoExtra])]
})
export class CoordinadorModule {}
