// my-aggregate.ts

import { AggregateRoot } from '@nestjs/cqrs';
import { EventStore } from './event-store';
import { TestingEvent } from '../events/impl/testing-event.event';
import {v4 as uuid} from "uuid"
export class MyAggregate extends AggregateRoot {
  private _myProp: string;
  private _version: number = 0;

  constructor(private readonly eventStore: EventStore) {
    super();
  }

  get myProp() {
    return this._myProp;
  }

  get version() {
    return this._version;
  }

  async doSomething(myArg: string,id:any) {
    if(id){
        const lastVersion = await this.eventStore.getLastVersion(id);
        this._version = lastVersion + 1;
    }
    

    
    const myEvent = new TestingEvent(myArg,"");
    this.apply(myEvent);

    await this.eventStore.saveEvent(id?id:uuid(), 'MyAggregate', myEvent.type, JSON.stringify(myEvent), this._version);
  }

  applyMyEvent(event: TestingEvent) {
    this._myProp = event.myProp;
  }
}