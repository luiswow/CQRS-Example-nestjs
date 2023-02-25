import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
// import * as clc from 'cli-color';
import { HeroKilledDragonEvent } from '../impl/hero-killed-dragon.event';

@EventsHandler(HeroKilledDragonEvent)
export class WeaHandler
  implements IEventHandler<HeroKilledDragonEvent> {



    
  async handle(event: HeroKilledDragonEvent) {


    // await this.eventStore.saveEvent(id?id:uuid(), 'MyAggregate', "lal", "data", this._version);

    
  }


}
