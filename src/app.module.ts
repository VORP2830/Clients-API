import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresDataSource } from './config/postgres.config';
import { HealthModule } from './features/health/health.module';
import { ClientModule } from './features/clients/client.module';
import { Client } from './models/client.entity';
import { Address } from './models/address.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(PostgresDataSource.options),
    TypeOrmModule.forFeature([Client, Address]),
    HealthModule,
    ClientModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
