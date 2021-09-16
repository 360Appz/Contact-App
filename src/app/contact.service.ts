import { HttpClientModule } from '@angular/common/http';

//Backend logic to retrive contact database

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  //Retrieve contact
 
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('http://localhost:3000/api/contacts');
  }

  addContacts(newContact)
  {

    //Response type is set text as json
    var headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json'
    };

    let URI = 'http://localhost:3000/api/contact';
    return this.http.post<{tasks: Task[]}>(URI, newContact, headers).
    pipe(map(res => res.tasks));
    

  }

  deleteContacts(id)
  {
   
    let URI = 'http://localhost:3000/api/contact/';
    return this.http.delete<{tasks: Task[]}>(`${URI}/${id}`)
    .pipe(map(res => res.tasks));

    //URI+id

  }


}

