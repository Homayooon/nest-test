import {IsDefined} from 'class-validator';


// Route: /auth/login | AuthCtrl.login
export class LoginDto {

    @IsDefined()
    username: string;

    @IsDefined()
    password: string;

}

