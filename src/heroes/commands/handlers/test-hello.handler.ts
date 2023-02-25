import {  CommandHandler,  EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { EventStoreDto } from '../../../event-store/dtos/event-store.dto';
// import { TestHelloEvent } from '../../events/impl/test-hello.event';
import { Test } from '../../models/test.model';
// import { HeroRepository } from '../../repository/test.repository';
import { HelloTestCommand } from '../impl/test-hello.command';

@CommandHandler(HelloTestCommand)

export class HelloTestHandler implements ICommandHandler<HelloTestCommand> {
  constructor(
    // private readonly repository: HeroRepository,
    private readonly publisher: EventPublisher,
    // private readonly eventBus: EventBus,
  ) {}

  async execute(command: HelloTestCommand) {

    console.log(clc.greenBright('KillDragonCommand...'));
const eventStore:EventStoreDto=  new EventStoreDto();
    const {title } = command;
    console.log(title)
    const test = this.publisher.mergeObjectContext(
    new Test("2")
    );
    console.log("TESTINNNG")
    
    console.log(test.getUncommittedEvents())
    test.callEventMethod(eventStore);
    
    test.commit();
    // this.eventBus.publish(new TestHelloEvent());

    
  }
}
