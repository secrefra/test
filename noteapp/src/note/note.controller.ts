import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}


@UseGuards(AuthGuard('jwt'))
@Post()
async create(
  @Body() createNoteDto: CreateNoteDto,
  @Req() req: any  
) {
  const userId = req.user?.userId; 
  console.log('✅ Utilisateur connecté ID:', userId);
  return this.noteService.create(createNoteDto, userId);
}

 @Get('/:id')
  findOne(@Param('id') id: string) {
  return this.noteService.findOne(id);
  }

  @Get()
  findAll() {
  return this.noteService.findAll();
  }



@Get('/dashboard/myNote')
@UseGuards(AuthGuard('jwt'))
async findByUser(@Req() req: any) {
  console.log("REQ.USER:", req.user);
  return this.noteService.findByUserId(req.user.userId);
}




  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.noteService.update(id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteService.remove(+id);
  }
}
