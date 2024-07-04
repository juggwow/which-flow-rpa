import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RpaModule } from './rpa/rpa.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rpa } from './rpa/entities/rpa.entity';

@Module({
  imports: [
    RpaModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'SA',
      password: 'YourStrong!Passw0rd',
      database: 'rpa',
      entities: [Rpa],
      synchronize: true,
      options: {
        encrypt: false, // ปิดการเข้ารหัส SSL
        trustServerCertificate: true, // ใช้ได้เฉพาะกับ self-signed certificate
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
