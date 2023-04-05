import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './schemas/owner.schema';

@Injectable()
export class OwnersService {
  constructor(@InjectModel(Owner.name) private ownerModel: Model<Owner>) {}

  async create(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    const createdOwner = new this.ownerModel(createOwnerDto);
    return createdOwner.save();
  }

  async findAll(): Promise<Owner[]> {
    return this.ownerModel.find().exec();
  }

  async findOne(id: string): Promise<Owner> {
    return this.ownerModel.findById(id).exec();
  }

  async update(id: string, updateOwnerDto: UpdateOwnerDto): Promise<Owner> {
    return this.ownerModel.findByIdAndUpdate(id, updateOwnerDto).exec();
  }

  async remove(id: string) {
    return this.ownerModel.findByIdAndDelete(id).exec();
  }
}
