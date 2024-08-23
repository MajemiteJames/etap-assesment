import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectService.create(createSubjectDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.subjectService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/topics')
  findTopics(@Param('id') id: string) {
    return this.subjectService.findTopics(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('topics/:topicId')
  findOneTopic(@Param('topicId') topicId: string) {
    return this.subjectService.findOneTopic(topicId);
  }
}
