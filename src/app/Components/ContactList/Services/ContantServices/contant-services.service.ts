import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { RecentContacts } from '../../ViewModel/recent-contacts';


@Injectable({
  providedIn: 'root'
})
export class ContantServicesService {

  constructor(private http:HttpClient) { }

  getContacts(): Observable<RecentContacts[]> {
    return this.http.get<Response>("/assets/data/contacts.json")
    .pipe(map((data:Response)=> data.data));

  }
}
class Response{
  constructor(public data:RecentContacts[]){}
}