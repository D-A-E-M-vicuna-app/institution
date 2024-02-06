import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Institution {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
