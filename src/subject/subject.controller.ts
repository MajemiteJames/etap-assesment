import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
// import { UpdateSubjectDto } from './dto/update-subject.dto';
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

  @UseGuards(JwtAuthGuard)
  @Get(':id/topics')
  findOne(@Param('id') id: string) {
    return this.subjectService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
  //   return this.subjectService.update(+id, updateSubjectDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectService.remove(+id);
  }
}
