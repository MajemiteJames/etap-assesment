import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { Subject } from './entities/subject.entity';
import { Topic } from 'src/topic/entities/topic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, Topic])],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}
