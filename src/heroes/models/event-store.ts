// event-store.ts

import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class EventStore {
  private client: MongoClient;
  private collectionName = 'events';


  async saveEvent(
    aggregateId: string,
    aggregateType: string,
    eventType: string,
    eventData: any,
    expectedVersion: number,
  ) {
    const db = this.client.db('new');
    const collection = db.collection(this.collectionName);

    const result = await collection.updateOne(
      {
        aggregateId,
        aggregateType,
        version: expectedVersion,
      },
      {
        $set: {
          aggregateId,
          aggregateType,
          eventType,
          eventData,
          version: expectedVersion + 1,
        },
      },
    );

    if (result.modifiedCount !== 1) {
      throw new Error('Concurrent modification detected');
    }
  }

  async getLastVersion(aggregateId: string): Promise<number> {
    const db = this.client.db('new');
    const collection = db.collection(this.collectionName);

    const result = await collection
      .find({ aggregateId })
      .sort({ version: -1 })
      .limit(1)
      .toArray();

    return result.length === 1 ? result[0].version : -1;
  }
}