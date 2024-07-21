import { Module } from '@nestjs/common';
import { TiempoExtraService } from './tiempo-extra.service';
import { TiempoExtraController } from './tiempo-extra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiempoExtra } from './entities/tiempo-extra.entity';

@Module({
  controllers: [TiempoExtraController],
  providers: [TiempoExtraService],
  imports: [TypeOrmModule.forFeature([TiempoExtra])]
})
export class TiempoExtraModule {}
