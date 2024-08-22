import { Injectable } from '@nestjs/common';
import { CreateCompletionDto } from './dto/create-completion.dto';
import { UpdateCompletionDto } from './dto/update-completion.dto';

@Injectable()
export class CompletionService {
  create(createCompletionDto: CreateCompletionDto) {
    return 'This action adds a new completion';
  }

  findAll() {
    return `This action returns all completion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} completion`;
  }

  update(id: number, updateCompletionDto: UpdateCompletionDto) {
    return `This action updates a #${id} completion`;
  }

  remove(id: number) {
    return `This action removes a #${id} completion`;
  }
}
