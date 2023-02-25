import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventStoreService } from './event-store.service';
import { EventStore, EventStoreSchema } from './entities/event-store.entity';

@Module({
  providers: [EventStoreService],
  imports:[
    MongooseModule.forFeature([{ name: EventStore.name, schema: EventStoreSchema }]),

  ],
  exports: [
  EventStoreService
  ]
})
export class EventStoreRootModule {}
