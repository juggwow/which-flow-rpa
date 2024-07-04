import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
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

    return token ==
      'iyqgxrdC6tDgmt5SPYpEIFAo9BbXSaeM918i8f03fORoOcyQhDiTVE8jd46YvJT1'
      ? true
      : false;
  }
}
