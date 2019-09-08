import { EmailValidator } from '@angular/forms';

export class RecentContacts {
    constructor(public firstName?:string,
                public lastName?:string,
                public email?:string,
                public image?:File ,
                public mobileNumber?:number)
        {}
}

