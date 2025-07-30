import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/schema/user.schema';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(username: string, email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new this.userModel({username, email, password: hashedPassword });
    return user.save();
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email });
  }

  async findUserById(id: string){
  return this.userModel.findById(id);
  }

}
