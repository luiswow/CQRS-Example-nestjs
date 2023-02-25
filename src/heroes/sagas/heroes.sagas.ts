import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeroKilledDragonEvent } from '../events/impl/hero-killed-dragon.event';
import { TestHelloEvent } from '../events/impl/test-hello.event';
import { WriteEventsModelService } from '../../write-events-model/write-events-model.service';



@Injectable()
export class HeroesGameSagas {

  constructor(private readonly writeEventsModelService: WriteEventsModelService){

  }

  @Saga()
  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$
      .pipe(
        ofType(HeroKilledDragonEvent),
        map(event => {
          console.log(event)

          console.log(clc.redBright('Inside [HeroesGameSagas] Saga'));
          return "";
        }),
      );
  }


  @Saga()
  storeReadModelEvents = (events$: Observable<any>): Observable<ICommand> => {
    return events$
      .pipe(
        ofType(TestHelloEvent),
        map(event => {

          this.writeEventsModelService.create({text: "prueba modelo de lectura db"});
          return "";
        }),
      );
  }
}
