import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ClienteModule } from './tecnico/tecnico.module';
import { CoordinadorModule } from './coordinador/coordinador.module';
import { TiempoExtra } from './tiempo-extra/entities/tiempo-extra.entity';
import { TiempoExtraModule } from './tiempo-extra/tiempo-extra.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ssl: process.env.STAGE === 'prod',
      extra: {
        ssl:
          process.env.STAGE === 'prod' ? { rejectUnauthorized: false } : null,
      },
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    ClienteModule,
    CoordinadorModule,
    TiempoExtraModule,
  ],
})
export class AppModule {}
