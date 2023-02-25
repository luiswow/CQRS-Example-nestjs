import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroRepository {
  async findOneById(id: number): Promise<any> {
    return [] ;
  }

  async findAll(): Promise<any> {
    return [];
  }
}
