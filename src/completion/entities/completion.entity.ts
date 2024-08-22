import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Topic } from '../../topic/entities/topic.entity';
import { Subject } from '../../subject/entities/subject.entity';

@Entity()
export class Completion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Topic)
  topic: Topic;

  @ManyToOne(() => Subject)
  subject: Subject;

  @CreateDateColumn()
  completedAt: Date;
}
