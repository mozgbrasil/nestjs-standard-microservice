import { Document } from 'mongoose';

export interface Company extends Document {
  readonly text: string;
}
