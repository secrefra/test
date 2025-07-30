import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async create(@Body() createUserDto: CreateUserDto) {
    const { username, email, password } = createUserDto;
    return this.userService.create(username, email, password);
  }


 @Get('/:id')
  findUserById(@Param('id') id: string) {
  return this.userService.findUserById(id);
  }
  
  
  @Get(':username')
  async findOne(@Param('username') username: string) {
    return this.userService.findOne(username);
  }
}

