import { Module } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { InstitutionResolver } from './institution.resolver';

@Module({
  providers: [InstitutionResolver, InstitutionService],
})
export class InstitutionModule {}
