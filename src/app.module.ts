import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RmqchannelSchema } from './rmqchannel/interfaces/rmqchannel.schema';
// import { RmqchannelModule } from './rmqchannel/rmqchannel.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    }),
    MongooseModule.forFeature([
      { name: 'Rmqchannel', schema: RmqchannelSchema },
    ]),
    // RmqchannelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
