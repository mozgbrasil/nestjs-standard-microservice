import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { AppService } from './app.service';
import { Rmqchannel } from './rmqchannel/interfaces/rmqchannel.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private logger = new Logger(AppController.name);

  // {"pattern":"message_printed","data":{"text":"Hello World"}}
  @EventPattern('message_printed')
  async handleMessagePrinted(data: Record<string, unknown>) {
    console.log(data.text);
  }

  @MessagePattern('notifications')
  getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
    console.log(`Pattern: ${context.getPattern()}`);
  }

  @EventPattern('create-rmq-channel')
  async createRmqchannel(
    @Payload() payload: Rmqchannel,
    @Ctx() rmqContext: RmqContext,
  ) {
    const channel = rmqContext.getChannelRef();
    const originalMessage = rmqContext.getMessage();

    try {
      await this.appService.createRmqchannel(payload);
      await channel.ack(originalMessage);
    } catch (exception) {
      this.logger.error(
        `exception->createRmqchannel: ${JSON.stringify(exception.message)}`,
      );
    }
  }

  @MessagePattern('find-rmqchannel-by-id')
  async findRmqchannelById(@Ctx() rmqContext: RmqContext) {
    const channel = rmqContext.getChannelRef();
    const originalMessage = rmqContext.getMessage();

    try {
      return await this.appService.findAllCompanies();
    } catch (exception) {
      this.logger.error(
        `exception->findRmqchannelById: ${JSON.stringify(exception.message)}`,
      );
    } finally {
      await channel.ack(originalMessage);
    }
  }

  @MessagePattern('find-rmqchannel-all')
  async findRmqchannelAll(
    @Payload() _id: string,
    @Ctx() rmqContext: RmqContext,
  ) {
    const channel = rmqContext.getChannelRef();
    const originalMessage = rmqContext.getMessage();

    try {
      return await this.appService.findRmqchannelByIdOrThrow(_id);
    } catch (exception) {
      this.logger.error(
        `exception->findRmqchannelAll: ${JSON.stringify(exception.message)}`,
      );
    } finally {
      await channel.ack(originalMessage);
    }
  }

  @MessagePattern('find-rmqchannel-by-name')
  async findRmqchannelByName(
    @Payload() name: string,
    @Ctx() rmqContext: RmqContext,
  ) {
    const channel = rmqContext.getChannelRef();
    const originalMessage = rmqContext.getMessage();

    try {
      return await this.appService.findRmqchannelByName(name);
    } catch (exception) {
      this.logger.error(
        `exception->findRmqchannelByName: ${JSON.stringify(exception.message)}`,
      );
    } finally {
      await channel.ack(originalMessage);
    }
  }

  @EventPattern('update-rmqchannel')
  async updateRmqchannel(@Payload() data: any, @Ctx() rmqContext: RmqContext) {
    const channel = rmqContext.getChannelRef();
    const originalMessage = rmqContext.getMessage();

    try {
      await this.appService.updateRmqchannel(data.id, data.company);
      await channel.ack(originalMessage);
    } catch (exception) {
      this.logger.error(
        `exception->updateRmqchannel: ${JSON.stringify(exception.message)}`,
      );
    }
  }
}
