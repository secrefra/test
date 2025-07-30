import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../../user/schema/user.schema';

@Schema()
export class Note extends Document {
  // @Prop({ required: true })
  // title: string;

  @Prop()
  content: string;


  @Prop({ type: String, ref: 'User' }) 
userId: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
