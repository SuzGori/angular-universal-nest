import { Controller } from '@nestjs/common';
import { Companies } from './companies.entity';
import { Crud } from '@dataui/crud';
import { CompaniesService } from './companies.service';

@Crud({
  model: {
    type: Companies,
  },
  params: {
    uuid: {
      type: 'uuid',
      primary: true,
      field: 'uuid',
    },
  },
})
@Controller('companies')
export class CompaniesController {
  constructor(public service: CompaniesService) {}
}
