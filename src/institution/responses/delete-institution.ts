import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class DeleteInstitutionResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;
}