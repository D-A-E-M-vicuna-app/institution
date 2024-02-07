
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UpdateInstitutionResponse {
  
    @Field()
    id: number;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    phoneNumber: string;
}