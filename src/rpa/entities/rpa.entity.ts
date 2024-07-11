import { defaultIfEmpty } from 'rxjs';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flowactive {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  flowname: string;

  @Column()
  date: Date;

  @Column()
  business: string;

  @Column({ default: '-' })
  username: string;
}
