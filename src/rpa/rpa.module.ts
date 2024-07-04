import { Module } from '@nestjs/common';
import { RpaService } from './rpa.service';
import { RpaController } from './rpa.controller';

@Module({
  controllers: [RpaController],
  providers: [RpaService],
})
export class RpaModule {}
