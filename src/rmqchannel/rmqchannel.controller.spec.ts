import { Test, TestingModule } from '@nestjs/testing';
import { RmqchannelController } from './rmqchannel.controller';
import { RmqchannelService } from './rmqchannel.service';

describe('RmqchannelController', () => {
  let controller: RmqchannelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RmqchannelController],
      providers: [RmqchannelService],
    }).compile();

    controller = module.get<RmqchannelController>(RmqchannelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
