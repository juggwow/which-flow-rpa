import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RpaService } from './rpa.service';
import { CreateRpaDto } from './dto/create-rpa.dto';
import { UpdateRpaDto } from './dto/update-rpa.dto';

@Controller('rpa')
export class RpaController {
  constructor(private readonly rpaService: RpaService) {}

  @Post()
  create(@Body() createRpaDto: CreateRpaDto) {
    return this.rpaService.create(createRpaDto);
  }

  @Get()
  findAll() {
    return this.rpaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rpaService.findOne(+id);
  }
}
