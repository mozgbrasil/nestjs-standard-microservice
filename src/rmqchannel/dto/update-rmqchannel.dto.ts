import { PartialType } from '@nestjs/mapped-types';
import { CreateRmqchannelDto } from './create-rmqchannel.dto';

export class UpdateRmqchannelDto extends PartialType(CreateRmqchannelDto) {}
