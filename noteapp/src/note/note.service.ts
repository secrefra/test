import { BadRequestException, Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './schema/note.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { UserService } from 'src/user/user.service';
import mongoose from 'mongoose';

@Injectable()
export class NoteService {
constructor( @InjectModel(Note.name) private noteModel: Model<Note>,
private userService: UserService) {}

async create(createNoteDto: CreateNoteDto, userId: any): Promise<Note> {
  const {  content } = createNoteDto;
  const newNote = new this.noteModel({ content,userId });
  return newNote.save();
}

async findOne(id: string) {
  const note = await this.noteModel.findById(id);
  console.log('Note found:', note);
  return note;
}

  async findAll() {
  return await this.noteModel.find();
  }



 async findByUserId(userId: any) {
 const user = await this.userService.findUserById(userId);
  if (!user) {
    throw new NotFoundException('User not found');
  }
  return await this.noteModel.find({ userId: user._id });
  }


async update(id: string, updateNoteDto: UpdateNoteDto) {
const updatedNote = await this.noteModel.findByIdAndUpdate(id,updateNoteDto);
return updatedNote;

  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
