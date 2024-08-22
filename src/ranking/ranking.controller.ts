import { Controller, Get, Param } from '@nestjs/common';
import { RankingService } from './ranking.service';

@Controller('ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}

  @Get('subject/:subjectId')
  getRanking(@Param('subjectId') subjectId: string) {
    return this.rankingService.getRankingForSubject(subjectId);
  }
}
