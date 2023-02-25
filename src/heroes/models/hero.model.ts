import { AggregateRoot } from '@nestjs/cqrs';
import { TestHelloEvent } from '../events/impl/test-hello.event';
// import {v4 as uuid } from "uuid"
import { EventStoreDto } from '../../event-store/dtos/event-store.dto';


export interface Event<T>  {

}
export abstract class Hero extends AggregateRoot {

  private _myProp: string;
  private _version: number = 0;




//  async  killEnemy(id: any) {


//   const aggregateId= uuid();
//   console.log(aggregateId);
//   const aggregateType= "Hero"
//   id= 0;

//     // logic
//     // logic
//   }

  // applyEvent(itemId: string) {
  //   // logic
  //   this.apply(new HeroFoundItemEvent(this.id, itemId));
  // }
  
  applyEvent(event: EventStoreDto,): void {
    this.apply(new TestHelloEvent(event));
    this.commit();
  }
  
  get myProp() {
    return this._myProp;
  }

  get version() {
    return this._version;
  }


}
