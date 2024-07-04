import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RpaModule } from './rpa/rpa.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flowactive } from './rpa/entities/rpa.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    RpaModule,
    ConfigModule.forRoot({
      isGlobal: true, // ทำให้คอนฟิกสามารถใช้งานได้ทั่วทั้งแอปพลิเคชัน
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get<string>('DATABASE_HOST'),
        port: Number(configService.get<number>('DATABASE_PORT')),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [Flowactive],
        synchronize: true,
        options: {
          encrypt: false, // ปิดการเข้ารหัส SSL
          trustServerCertificate: true, // ใช้ได้เฉพาะกับ self-signed certificate
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
