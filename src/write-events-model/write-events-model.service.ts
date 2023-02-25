import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWriteEventsModelDto } from './dto/create-write-events-model.dto';
import { UpdateWriteEventsModelDto } from './dto/update-write-events-model.dto';
import { WriteEventsModel } from './entities/write-events-model.entity';

@Injectable()
export class WriteEventsModelService {


  constructor(

    @InjectRepository(WriteEventsModel)
    private readonly productRepository: Repository<WriteEventsModel>,
  ){
console.log(this.productRepository);
  }

  create(createWriteEventsModelDto: CreateWriteEventsModelDto) {
    console.log(createWriteEventsModelDto.text)
   const data= this.productRepository.create({
      aggregateId: "s23423423423",
       aggregateType: "PruebaEvento",
       eventType: "Crear",
       payload: "Payload",
       version: 1,
    })
    this.productRepository.save(data);


    return 'This action adds a new writeEventsModel';
  }

  findAll() {
    return `This action returns all writeEventsModel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} writeEventsModel`;
  }

  update(id: number, updateWriteEventsModelDto: UpdateWriteEventsModelDto) {
    return `This action updates a #${id} writeEventsModel`;
  }

  remove(id: number) {
    return `This action removes a #${id} writeEventsModel`;
  }
}
