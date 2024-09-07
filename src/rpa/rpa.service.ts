import { Injectable } from '@nestjs/common';
import { CreateRpaDto } from './dto/create-rpa.dto';
import { UpdateRpaDto } from './dto/update-rpa.dto';
import { Flowactive } from './entities/rpa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RpaService {
  constructor(
    @InjectRepository(Flowactive)
    private rpaRepository: Repository<Flowactive>,
  ) {}

  async create(createRpaDto: CreateRpaDto) {
    const res = this.rpaRepository.save({
      flowname: createRpaDto.flowname,
      business: createRpaDto.business,
      date: createRpaDto.date||new Date(),
    });
    return res;
  }
}
