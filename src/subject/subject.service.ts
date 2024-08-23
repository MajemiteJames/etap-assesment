import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { Subject } from './entities/subject.entity';
import { Topic } from 'src/topic/entities/topic.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
    @InjectRepository(Topic)
    private topicRepository: Repository<Topic>,
  ) {}

  create(createSubjectDto: CreateSubjectDto) {
    const subject = this.subjectRepository.create(createSubjectDto);
    return this.subjectRepository.save(subject);
  }

  findAll() {
    return this.subjectRepository.find({ relations: ['topics'] });
  }

  findTopics(subjectId: string) {
    return this.topicRepository.find({ where: { subject: { id: subjectId } } });
  }

  findOneTopic(topicId: string) {
    return this.topicRepository.findOne({ where: { id: topicId } });
  }

  addTopic(subjectId: string, createTopicDto: any) {
    const topic = this.topicRepository.create({
      ...createTopicDto,
      subject: { id: subjectId },
    });
    return this.topicRepository.save(topic);
  }
}
