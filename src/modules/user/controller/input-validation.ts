import {IsDefined} from 'class-validator';


// Route: /user/create | UserCtrl.create
export class CreateDto {

    @IsDefined()
    username: string;

    @IsDefined()
    password: string;

}

