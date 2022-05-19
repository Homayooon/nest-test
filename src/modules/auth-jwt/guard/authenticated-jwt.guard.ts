import {Injectable} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';

@Injectable()
export class AuthenticatedJwtGuard extends AuthGuard('jwt') {

}
