import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import * as clc from 'cli-color';
import { TestHelloEvent } from '../impl/test-hello.event';
import { EventStoreService } from '../../../event-store/event-store.service';
import { validate as uuidValidate } from 'uuid';
// import {v4 as uuid } from "uuid"


@EventsHandler(TestHelloEvent)
export class HeroKilledDragonHandler
  implements IEventHandler<TestHelloEvent> {

    constructor(private readonly eventStoreService:EventStoreService){

    }
    
  async handle(event: TestHelloEvent) {
   let  {aggregateId,expectedVersion,aggregateType,eventType,eventData }=event.lol

    if(uuidValidate(aggregateId)){
      const lastVersion = await this.eventStoreService.getLastVersion(aggregateId);
     expectedVersion = lastVersion + 1;

    }

  
  
  await this.eventStoreService.saveEvent(aggregateId, aggregateType, eventType,eventData , expectedVersion);
    console.log(clc.greenBright('HeroKilledDragonEvent...'));
  }


}
