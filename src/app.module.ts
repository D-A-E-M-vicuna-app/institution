import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstitutionModule } from './institution/institution.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,  
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      database: process.env.PGDATABASE || process.env.DB_DATABASE,
      host: process.env.PGHOST ||process.env.DB_HOST,
      port: parseInt(process.env.PGPORT) ||parseInt(process.env.DB_PORT),
      username: process.env.PGUSER || process.env.DB_USER,
      password: process.env.PGPASSWORD ||process.env.DB_PASS,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true
    })
    
    
    ,InstitutionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
