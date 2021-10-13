import { Injectable, Logger } from '@nestjs/common';
import { Ctx, Payload, RmqContext, RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRmqchannelDto } from './dto/create-rmqchannel.dto';
import { UpdateRmqchannelDto } from './dto/update-rmqchannel.dto';
import { Rmqchannel } from './interfaces/rmqchannel.interface';

@Injectable()
export class RmqchannelService {
  private logger = new Logger(RmqchannelService.name);

  constructor(
    @InjectModel('Rmqchannel')
    private readonly rmqchannelMyModel: Model<Rmqchannel>,
  ) {}

  async preCreateRmqchannel(
    @Payload() payload: Rmqchannel,
    @Ctx() rmqContext: RmqContext,
  ) {
    const channel = rmqContext.getChannelRef();
    const originalMessage = rmqContext.getMessage();

    try {
      await this.createRmqchannel(payload);
      await channel.ack(originalMessage);
    } catch (exception) {
      this.logger.error(
        `exception->createRmqchannel: ${JSON.stringify(exception.message)}`,
      );
    }
  }

  async createRmqchannel(
    createRmqchannelDto: CreateRmqchannelDto,
  ): Promise<Rmqchannel> {
    const result = await new this.rmqchannelMyModel(createRmqchannelDto).save();

    if (!result) {
      throw new RpcException('Problem to create a record');
    }
    return result;
  }
}
