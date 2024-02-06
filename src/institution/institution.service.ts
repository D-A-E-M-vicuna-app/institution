import { Injectable } from '@nestjs/common';
import { CreateInstitutionInput } from './dto/create-institution.input';
import { UpdateInstitutionInput } from './dto/update-institution.input';

@Injectable()
export class InstitutionService {
  create(createInstitutionInput: CreateInstitutionInput) {
    return 'This action adds a new institution';
  }

  findAll() {
    return `This action returns all institution`;
  }

  findOne(id: number) {
    return `This action returns a #${id} institution`;
  }

  update(id: number, updateInstitutionInput: UpdateInstitutionInput) {
    return `This action updates a #${id} institution`;
  }

  remove(id: number) {
    return `This action removes a #${id} institution`;
  }
}
