import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RmqchannelService } from './rmqchannel.service';
import { CreateRmqchannelDto } from './dto/create-rmqchannel.dto';
import { UpdateRmqchannelDto } from './dto/update-rmqchannel.dto';

@Controller('rmqchannel')
export class RmqchannelController {
  constructor(private readonly rmqchannelService: RmqchannelService) {}

  @Post()
  create(@Body() createRmqchannelDto: CreateRmqchannelDto) {
    return this.rmqchannelService.create(createRmqchannelDto);
  }

  @Get()
  findAll() {
    return this.rmqchannelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rmqchannelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRmqchannelDto: UpdateRmqchannelDto) {
    return this.rmqchannelService.update(+id, updateRmqchannelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rmqchannelService.remove(+id);
  }
}
