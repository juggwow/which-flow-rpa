import { PartialType } from '@nestjs/mapped-types';
import { CreateRpaDto } from './create-rpa.dto';

export class UpdateRpaDto extends PartialType(CreateRpaDto) {}
