import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompletionService } from './completion.service';
import { CompletionController } from './completion.controller';
import { User } from 'src/user/entities/user.entity';
import { Topic } from 'src/topic/entities/topic.entity';
import { Completion } from './entities/completion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Topic, Completion])],
  controllers: [CompletionController],
  providers: [CompletionService],
})
export class CompletionModule {}
