import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Completion } from './entities/completion.entity';
import { User } from 'src/user/entities/user.entity';
import { Topic } from 'src/topic/entities/topic.entity';

@Injectable()
export class CompletionService {
  constructor(
    @InjectRepository(Completion)
    private completionRepository: Repository<Completion>,
    @InjectRepository(Topic)
    private readonly topicRepository: Repository<Topic>,
  ) {}

  async completeTopic(user: User, topicId: string) {
    // Fetch the Topic entity by topicId
    const topic = await this.topicRepository.findOne({
      where: { id: topicId },
    });

    if (!topic) {
      throw new Error('Topic not found');
    }

    // Create and save the completion record
    const completion = this.completionRepository.create({ user, topic });
    return this.completionRepository.save(completion);
  }

  getUserCompletion(userId: string) {
    return this.completionRepository.find({
      where: { user: { id: userId } },
      relations: ['topic'],
    });
  }
}
