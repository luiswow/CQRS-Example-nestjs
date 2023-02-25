export class EventStoreDto{

      aggregateId: string;
        aggregateType: string;
        eventType: string;
        eventData: string;
        expectedVersion?: number;

 }