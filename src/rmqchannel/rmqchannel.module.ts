import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RmqchannelSchema } from './interfaces/rmqchannel.schema';
import { RmqchannelService } from './rmqchannel.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forFeature([
      { name: 'Rmqchannel', schema: RmqchannelSchema },
    ]),
  ],
  controllers: [],
  providers: [RmqchannelService],
  exports: [RmqchannelService],
})
export class RmqchannelModule {}
