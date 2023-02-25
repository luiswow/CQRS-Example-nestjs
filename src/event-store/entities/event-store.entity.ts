import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class EventStore extends Document {
    
    @Prop({
            
        index: true,
    })

    aggregateId: string;

    @Prop({
        index: true,

    })
    aggregateType: string;

    @Prop({
        index: true,

    })
    eventType: string;

    @Prop({
        index: true,

    })
    payload:string;

    @Prop({
        index: true,

    })
    version: number;


}

export const EventStoreSchema= SchemaFactory.createForClass(EventStore);