import { CreateInstitutionInput } from './create-institution.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInstitutionInput{

  @Field()
  name: string;

  @Field({nullable: true})
  newName?: string;

  @Field({nullable: true})
  newEmail?: string;

  @Field({nullable: true})
  newPhoneNumber?: string;
}
