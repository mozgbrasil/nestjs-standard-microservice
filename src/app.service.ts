import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRmqchannelDto } from './rmqchannel/dto/create-rmqchannel.dto';
import { UpdateRmqchannelDto } from './rmqchannel/dto/update-rmqchannel.dto';
import { Rmqchannel } from './rmqchannel/interfaces/rmqchannel.interface';
@Injectable()
export class AppService {
  constructor(
    @InjectModel('Rmqchannel') private readonly myModel: Model<Rmqchannel>,
  ) {}

  async createRmqchannel(
    createRmqchannelDto: CreateRmqchannelDto,
  ): Promise<Rmqchannel> {
    const saved = await new this.myModel(createRmqchannelDto).save();

    if (!saved) {
      throw new RpcException('Problem to create a record');
    }
    return saved;
  }

  async findRmqchannelByName(name: string): Promise<Rmqchannel> {
    return await this.myModel.findOne({ name });
  }

  async findRmqchannelByIdOrThrow(_id: string): Promise<Rmqchannel> {
    return await this.myModel.findById({ _id });
  }

  async findAllCompanies(): Promise<Array<Rmqchannel>> {
    return await this.myModel.find();
  }

  async updateRmqchannel(
    _id: string,
    updateRmqchannelDto: UpdateRmqchannelDto,
  ): Promise<void> {
    await this.myModel.findByIdAndUpdate(_id, updateRmqchannelDto);
  }
}
