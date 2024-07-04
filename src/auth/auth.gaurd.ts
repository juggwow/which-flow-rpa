import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    // ทำการตรวจสอบค่า authorization header
    if (!authHeader) {
      return false;
    }

    const token = authHeader.split(' ')[1];

    return token == this.configService.get<string>('TOKEN') ? true : false;
  }
}
