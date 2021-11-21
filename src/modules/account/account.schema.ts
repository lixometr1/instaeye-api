import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
export class Account {
  @Prop()
  name?: string;

  @Prop({ index: true, required: true, unique: true })
  username: string;

  @Prop()
  photo?: string;

  @Prop([String])
  gallery?: string[];

  @Prop()
  age?: number;

  @Prop()
  gender?: string;

  @Prop()
  description?: string;

  @Prop()
  followers: number;

  @Prop({ type: Object })
  location?: object;

  @Prop({ default: 0 })
  likes: number;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
