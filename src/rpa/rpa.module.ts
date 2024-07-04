import { Module } from '@nestjs/common';
import { RpaService } from './rpa.service';
import { RpaController } from './rpa.controller';
import { Rpa } from './entities/rpa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Rpa])],
  controllers: [RpaController],
  providers: [RpaService],
})
export class RpaModule {}
