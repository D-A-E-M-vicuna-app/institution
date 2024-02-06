import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InstitutionService } from './institution.service';
import { Institution } from './entities/institution.entity';
import { CreateInstitutionInput } from './dto/create-institution.input';
import { UpdateInstitutionInput } from './dto/update-institution.input';

@Resolver(() => Institution)
export class InstitutionResolver {
  constructor(private readonly institutionService: InstitutionService) {}

  @Mutation(() => Institution)
  createInstitution(@Args('createInstitutionInput') createInstitutionInput: CreateInstitutionInput) {
    return this.institutionService.create(createInstitutionInput);
  }

  @Query(() => [Institution], { name: 'institution' })
  findAll() {
    return this.institutionService.findAll();
  }

  @Query(() => Institution, { name: 'institution' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.institutionService.findOne(id);
  }

  @Mutation(() => Institution)
  updateInstitution(@Args('updateInstitutionInput') updateInstitutionInput: UpdateInstitutionInput) {
    return this.institutionService.update(updateInstitutionInput.id, updateInstitutionInput);
  }

  @Mutation(() => Institution)
  removeInstitution(@Args('id', { type: () => Int }) id: number) {
    return this.institutionService.remove(id);
  }
}
