import { ContactService } from './../contact.service';
import { Contact } from '../contact';
import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
//import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[ContactService]
})


export class ContactComponent implements OnInit {
  contacts!:Contact[];
  contact!: Contact;
  first_name!: string; //! = Ensures Typescript you're certain value is not null/undefined
  last_name!: string;
  phone!:string;

  //Injects service
  constructor(private contactService: ContactService,
   ) { }


  addContact()
  {
    const newContact = 
    {
      first_name : this.first_name,
      last_name : this.last_name,
      phone : this.phone  

    }
    this.contactService.addContacts(newContact)
    .subscribe(contact =>
      {
        this.contacts.push(newContact); //contact
        this.contactService.getContacts()
        .subscribe(contacts => this.contacts = contacts);
      }); 

  }


  deleteContact(id:any)
  {
   
    var contacts = this.contacts;
    this.contactService.deleteContacts(id)
    .subscribe((data:any) => 
      {
        console.log(data);
        if(data.n==1)
        {
          
          for(var i=0; i<contacts.length; i++)
          {
            if(contacts[i]._id ==id)
            {
              contacts.splice(i,1);
            }

          }
        }
      }
      );/**/
  }


  ngOnInit() 
  {
    //Initialize when browser is loaded
    this.contactService.getContacts()
    .subscribe(contacts => this.contacts = contacts);
  }

}
