import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Subject } from '../../subject/entities/subject.entity';

@Entity()
export class Ranking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Subject)
  subject: Subject;

  @Column('float')
  completionRate: number;

  @Column('int')
  rank: number;
}
