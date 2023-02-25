import { Module } from '@nestjs/common';
import { WriteEventsModelService } from './write-events-model.service';
import { WriteEventsModelController } from './write-events-model.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WriteEventsModel } from './entities/write-events-model.entity';

@Module({
  controllers: [WriteEventsModelController],
  imports: [
    TypeOrmModule.forFeature([
    WriteEventsModel
    ])

  ],
  providers: [WriteEventsModelService],
  exports: [WriteEventsModelService]
})
export class WriteEventsModelModule {}
