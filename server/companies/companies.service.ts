import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Companies } from './companies.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CompaniesService extends TypeOrmCrudService<Companies> {
  constructor(
    @InjectRepository(Companies)
    repo: any
  ) {
    super(repo);
  }
}
