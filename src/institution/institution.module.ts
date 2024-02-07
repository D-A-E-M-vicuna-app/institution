import { Module } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { InstitutionResolver } from './institution.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { Institution } from './entities/institution.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile:{
        federation: 2
      },
      context: ({ req, res }) => ({ req, res }),
    }),
    
    
    TypeOrmModule.forFeature([Institution])],
  providers: [InstitutionResolver, InstitutionService],
})
export class InstitutionModule {}
