import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WriteEventsModelService } from './write-events-model.service';
import { CreateWriteEventsModelDto } from './dto/create-write-events-model.dto';
import { UpdateWriteEventsModelDto } from './dto/update-write-events-model.dto';

@Controller('write-events-model')
export class WriteEventsModelController {
  constructor(private readonly writeEventsModelService: WriteEventsModelService) {}

  @Post()
  create(@Body() createWriteEventsModelDto: CreateWriteEventsModelDto) {
    return this.writeEventsModelService.create(createWriteEventsModelDto);
  }

  @Get()
  findAll() {
    return this.writeEventsModelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.writeEventsModelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWriteEventsModelDto: UpdateWriteEventsModelDto) {
    return this.writeEventsModelService.update(+id, updateWriteEventsModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.writeEventsModelService.remove(+id);
  }
}
