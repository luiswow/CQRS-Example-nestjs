import { PartialType } from '@nestjs/mapped-types';
import { CreateWriteEventsModelDto } from './create-write-events-model.dto';

export class UpdateWriteEventsModelDto extends PartialType(CreateWriteEventsModelDto) {}
