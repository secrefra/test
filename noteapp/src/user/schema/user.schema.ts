
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Note } from '../../note/schema/note.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

@Prop({ index: true })
   email: string;
}
//  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Note' })
//   notes: Note[];

export const UserSchema = SchemaFactory.createForClass(User);
