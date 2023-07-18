import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { Companies } from './companies/companies.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/angular-universal-nest/browser'),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: '0.0.0.0',
        port: 5432,
        username: 'postgres',
        password: '123456',
        database: 'postgres',
        schema: 'public',
        entities: [Companies],
      }),
    }),
    CompaniesModule,
  ],
})
export class AppModule {}
