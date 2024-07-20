import { Module } from '@nestjs/common';
import { TecnicoService } from './tecnico.service';
import { ClienteController } from './tecnico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tecnico } from './entities/tecnico.entity';
import { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';



@Module({
  controllers: [ClienteController],
  providers: [TecnicoService,],
  imports: [TypeOrmModule.forFeature([Tecnico,User,]),UserModule]
})
export class ClienteModule {}
