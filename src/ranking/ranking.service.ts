import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ranking } from './entities/ranking.entity';

@Injectable()
export class RankingService {
  constructor(
    @InjectRepository(Ranking)
    private rankingRepository: Repository<Ranking>,
  ) {}

  getRankingForSubject(subjectId: string) {
    return this.rankingRepository.find({
      where: { subject: { id: subjectId } },
      order: { rank: 'ASC' },
    });
  }
}
