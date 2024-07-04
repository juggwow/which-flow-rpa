import { Injectable } from '@nestjs/common';
import { CreateRpaDto } from './dto/create-rpa.dto';
import { UpdateRpaDto } from './dto/update-rpa.dto';

@Injectable()
export class RpaService {
  create(createRpaDto: CreateRpaDto) {
    return 'This action adds a new rpa';
  }

  findAll() {
    return `This action returns all rpa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rpa`;
  }
}
