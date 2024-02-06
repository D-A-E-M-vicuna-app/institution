import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstitutionModule } from './institution/institution.module';

@Module({
  imports: [InstitutionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
