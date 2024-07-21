import { Module } from '@nestjs/common';
import { ClienteService } from './tecnico.service';
import { ClienteController } from './tecnico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tecnico } from './entities/tecnico.entity';


@Module({
  controllers: [ClienteController],
  providers: [ClienteService],
  imports: [TypeOrmModule.forFeature([Tecnico])]
})
export class ClienteModule {}
