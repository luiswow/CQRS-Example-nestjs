import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesGameModule } from './heroes/heroes.module';
import { EventStoreRootModule } from './event-store/event-store.module';
import { WriteEventsModelModule } from './write-events-model/write-events-model.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HeroesGameModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot("mongodb://localhost:27017/new"),
    EventStoreRootModule,
    WriteEventsModelModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class ApplicationModule {}
