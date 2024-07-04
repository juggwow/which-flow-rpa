import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RpaService } from './rpa.service';
import { CreateRpaDto } from './dto/create-rpa.dto';
import { AuthGuard } from 'src/auth/auth.gaurd';

@Controller('rpa')
export class RpaController {
  constructor(private readonly rpaService: RpaService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createRpaDto: CreateRpaDto) {
    return this.rpaService.create(createRpaDto);
  }
}
