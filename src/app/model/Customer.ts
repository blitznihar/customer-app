import { single } from "rxjs/operators";

export class Customer {
    FirstName:string
    LastName: string
    Mobile: string
    Email: string
    since: string
    constructor(FirstName: string, LastName: string, Mobile: string, Email: string, since: string){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Mobile = Mobile;
        this.Email = Email;
        this.since = since;
    }
}