import { Injectable } from '@nestjs/common';
import { CreateRmqchannelDto } from './dto/create-rmqchannel.dto';
import { UpdateRmqchannelDto } from './dto/update-rmqchannel.dto';

@Injectable()
export class RmqchannelService {
  create(createRmqchannelDto: CreateRmqchannelDto) {
    return 'This action adds a new rmqchannel';
  }

  findAll() {
    return `This action returns all rmqchannel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rmqchannel`;
  }

  update(id: number, updateRmqchannelDto: UpdateRmqchannelDto) {
    return `This action updates a #${id} rmqchannel`;
  }

  remove(id: number) {
    return `This action removes a #${id} rmqchannel`;
  }
}
