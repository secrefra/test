import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { Note, NoteSchema } from './schema/note.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from 'src/user/user.service';
import { UserController } from 'src/user/user.controller';
import { UserModule } from 'src/user/user.module';

@Module({
   imports: [
   UserModule,
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }])
  ],
  controllers: [NoteController],
  providers: [NoteService],
  exports: [NoteService],

})
export class NoteModule {}
