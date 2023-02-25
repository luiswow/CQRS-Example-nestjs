import {  Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EventStore } from './entities/event-store.entity';

@Injectable()
export class EventStoreService {

    constructor(
        @InjectModel(EventStore.name)
        private readonly aggregateModel: Model<EventStore>,
    ){
      
        
    }

    async saveEvent(
        aggregateId: string,
        aggregateType: string,
        eventType: string,
       payload: string,
        version: number,
      ) {

        console.log("Save event service")
    
         await this.aggregateModel.create({
            aggregateId,
            aggregateType,
            eventType,
            payload,
            version
         });
         console.log(+version, "version");

        
      }

    async getLastVersion(aggregateId: string): Promise<any> {

             const result= await   this.aggregateModel      
                .find({ aggregateId })
                .sort({ version: -1 })
                .limit(1)

                console.log(result);
                
                // .toArray(); 
        // const result = await collection
        //   .find({ aggregateId })
        //   .sort({ version: -1 })
        //   .limit(1)
        //   .toArray();
    
        return result.length === 1 ? result[0].version : -1;
      }

}
