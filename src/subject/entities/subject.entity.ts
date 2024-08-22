import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Topic } from '../../topic/entities/topic.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @OneToMany(() => Topic, (topic) => topic.subject)
  topics: Topic[];

  @CreateDateColumn()
  createdAt: Date;
}
