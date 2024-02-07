import { Injectable } from '@nestjs/common';
import { CreateInstitutionInput } from './dto/create-institution.input';
import { UpdateInstitutionInput } from './dto/update-institution.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Institution } from './entities/institution.entity';
import { Repository } from 'typeorm';
import { DeleteInstitutionResponse } from './responses/delete-institution';
import { UpdateInstitutionResponse } from './responses/update-institution.response';

@Injectable()
export class InstitutionService {
  constructor(
    @InjectRepository(Institution)
    private institutionRepository: Repository<Institution>,
  ) { }

  async create(createInstitutionInput: CreateInstitutionInput): Promise<Institution> {
    const existingInstitution = await this.institutionRepository.findOne({ where: { name: createInstitutionInput.name } });
    if (existingInstitution) {
      throw new Error('Institution already exists');
    }
    const institution = this.institutionRepository.create(createInstitutionInput);
    return this.institutionRepository.save(institution);
  }

  findAll(): Promise<Institution[]> {
    return this.institutionRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} institution`;
  }

  async update(updateInstitutionInput: UpdateInstitutionInput): Promise<UpdateInstitutionResponse> {
    const { name, newName, newEmail, newPhoneNumber } = updateInstitutionInput;
    const institution = await this.institutionRepository.findOne({ where: { name: updateInstitutionInput.name } });
    if (!institution) {
      throw new Error('Institution not found');
    }
    
    // Si newName, newEmail o newPhoneNumber no son undefined, actualiza el campo correspondiente
    if (newName !== undefined) institution.name = newName;
    if (newEmail !== undefined) institution.email = newEmail;
    if (newPhoneNumber !== undefined) institution.phoneNumber = newPhoneNumber;
    await this.institutionRepository.save(institution);

    return {
      id: institution.id,
      name: institution.name,
      email: institution.email,
      phoneNumber: institution.phoneNumber,
    }


  }

  async deleteInstitution(id: number): Promise<DeleteInstitutionResponse> {
    const institution = await this.institutionRepository.findOne({ where: { id } });
    if (!institution) {
      throw new Error('Institution not found');
    }
    this.institutionRepository.remove(institution);
    return { success: true, message: 'Institution deleted successfully' };
  }
}
