import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rpa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  flowname: string;

  @Column()
  date: Date;

  @Column()
  business: string;
}
