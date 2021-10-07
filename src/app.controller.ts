import { Controller } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { AppService } from './app.service';
import { Rmqchannel } from './rmqchannel/interfaces/rmqchannel.interface';
import { RmqchannelService } from './rmqchannel/rmqchannel.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rmqChannelService: RmqchannelService,
  ) {}

  @EventPattern('create-rmq-channel')
  async createRmqchannel(
    @Payload() payload: Rmqchannel,
    @Ctx() rmqContext: RmqContext,
  ) {
    this.rmqChannelService.preCreateRmqchannel(payload, rmqContext);
  }
}
