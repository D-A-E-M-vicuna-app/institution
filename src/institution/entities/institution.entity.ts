import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Institution {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true})
  name: string;

  @Field()
  @Column({ nullable: true})
  email: string;

  @Field()
  @Column({ nullable: true})
  phoneNumber: string;

}
