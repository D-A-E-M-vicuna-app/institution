import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInstitutionInput {
  
  @Field()
  name: string;
  
  @Field()
  email?: string;

  @Field()
  phoneNumber?: string;
}
