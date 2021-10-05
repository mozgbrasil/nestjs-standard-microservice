import { Document } from 'mongoose';
export interface Rmqchannel extends Document {
  readonly url: string;
  readonly body: string;
  readonly method: string;
  readonly headers: string;
  readonly timestamp: string;
}
