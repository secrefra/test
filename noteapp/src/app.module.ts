import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
  import { MongooseModule } from '@nestjs/mongoose';
  import { UserSchema } from './user/schema/user.schema';
import { AuthModule } from './auth/auth.module';
import { NoteModule } from './note/note.module';
import { NoteSchema } from './note/schema/note.schema';
import { ConfigModule } from '@nestjs/config';



@Module({
    imports: [
        ConfigModule.forRoot({
      isGlobal: true, // 👈 rend les variables accessibles partout
    }),
       UserModule,
       MongooseModule.forRoot('mongodb://localhost:27017/appdb'),
      MongooseModule.forFeature([
  { name: 'User', schema: UserSchema },
  { name: 'Note', schema: NoteSchema }
]),

       AuthModule,
       NoteModule
      ],
 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
