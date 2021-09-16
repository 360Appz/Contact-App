
//Schema/Table for contact list

export class Contact
{
    _id?: string; //? = of a field
    first_name!: string; //! = Ensures Typescript you're certain value is not null/undefined
    last_name!: string;
    phone!:string;

}