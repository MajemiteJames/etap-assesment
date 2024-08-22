import { Controller, Post, Param, UseGuards, Request } from '@nestjs/common';
import { CompletionService } from './completion.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('completion')
export class CompletionController {
  constructor(private readonly completionService: CompletionService) {}

  @UseGuards(JwtAuthGuard)
  @Post('complete/:topicId')
  completeTopic(@Request() req, @Param('topicId') topicId: string) {
    return this.completionService.completeTopic(req.user, topicId);
  }
}
