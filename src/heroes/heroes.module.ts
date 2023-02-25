import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { HeroesGameController } from './heroes.controller';
import { QueryHandlers } from './queries/handlers';
import { HeroRepository } from './repository/hero.repository';
import { HeroesGameSagas } from './sagas/heroes.sagas';
import { EventStoreRootModule } from '../event-store/event-store.module';
import { WriteEventsModelModule } from '../write-events-model/write-events-model.module';

@Module({
  imports: [CqrsModule,
    EventStoreRootModule,
    WriteEventsModelModule,
  ],
  controllers: [HeroesGameController],
  providers: [

    HeroRepository,

    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    HeroesGameSagas,

  ],
})
export class HeroesGameModule {}
