import { HeroFoundItemEvent } from '../events/impl/hero-found-item.event';
import { Hero } from './hero.model';
import { EventStoreDto } from '../../event-store/dtos/event-store.dto';

export class Test extends Hero{

  constructor(private readonly id: string) {
    super();
  }

 async  callEventMethod(eventStoreDto: EventStoreDto) {

  this.applyEvent(eventStoreDto);
  

    // logic
  }

  addItem(itemId: string) {
    // logic
    this.apply(new HeroFoundItemEvent(this.id, itemId));
  }



}
