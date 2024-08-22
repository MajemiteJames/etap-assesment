import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Subject } from '../../subject/entities/subject.entity';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  video: string;

  @ManyToOne(() => Subject, (subject) => subject.topics)
  subject: Subject;

  @CreateDateColumn()
  createdAt: Date;
}
