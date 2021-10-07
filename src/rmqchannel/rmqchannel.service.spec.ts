import { Test, TestingModule } from '@nestjs/testing';
import { RmqchannelService } from './rmqchannel.service';

describe('RmqchannelService', () => {
  let service: RmqchannelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RmqchannelService],
    }).compile();

    service = module.get<RmqchannelService>(RmqchannelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
