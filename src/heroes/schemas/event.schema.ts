import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
  aggregateId: String,
  aggregateType: String,
  eventType: String,
  payload: mongoose.Schema.Types.Mixed,
  version: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});