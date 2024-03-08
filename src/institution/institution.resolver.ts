import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InstitutionService } from './institution.service';
import { Institution } from './entities/institution.entity';
import { CreateInstitutionInput } from './dto/create-institution.input';
import { UpdateInstitutionInput } from './dto/update-institution.input';
import { DeleteInstitutionResponse } from './responses/delete-institution';
import { UpdateInstitutionResponse } from './responses/update-institution.response';

@Resolver(() => Institution)
export class InstitutionResolver {
  constructor(private readonly institutionService: InstitutionService) { }

  @Mutation(() => Institution)
  createInstitution(@Args('CreateInstitutionInput') createInstitutionInput: CreateInstitutionInput): Promise<Institution> {
    return this.institutionService.create(createInstitutionInput);
  }

  @Query(() => [Institution], { name: 'institutions' })
  findAll(): Promise<Institution[]> {
    return this.institutionService.findAll();
  }

  @Query(() => Institution, { name: 'institution' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Institution>{
    return this.institutionService.findOne(id);
  }

  

  @Mutation(() => DeleteInstitutionResponse, { name: 'deleteInstitution' })
  deleteInstitution(@Args('id', { type: () => Int }) id: number): Promise<DeleteInstitutionResponse>{
    return this.institutionService.deleteInstitution(id);
  }

  @Mutation(() => UpdateInstitutionResponse, { name: 'updateInstitution' })
  updateInstitution(@Args('UpdateInstitutionInput') updateInstitutionInput: UpdateInstitutionInput): Promise<UpdateInstitutionResponse>{
    return this.institutionService.update(updateInstitutionInput);
  }

}
