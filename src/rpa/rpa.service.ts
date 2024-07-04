import { Injectable } from '@nestjs/common';
import { CreateRpaDto } from './dto/create-rpa.dto';
import { UpdateRpaDto } from './dto/update-rpa.dto';
import { Rpa } from './entities/rpa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RpaService {
  constructor(
    @InjectRepository(Rpa)
    private rpaRepository: Repository<Rpa>,
  ) {}

  async create(createRpaDto: CreateRpaDto) {
    const res = this.rpaRepository.create({
      flowname: createRpaDto.flowname,
      business: createRpaDto.business,
      date: new Date(),
    });
    return { message: 'success' };
  }
}
