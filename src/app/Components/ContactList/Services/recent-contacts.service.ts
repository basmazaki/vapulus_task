import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecentContacts } from '../ViewModel/recent-contacts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RecentContactsService {
// private url:string="/assets/data/recent.json";
  constructor(private http:HttpClient) { 
  
}
  //getRecentContacts():Observable<RecentContacts[]>
  //{ alert("ssssssssss");
    //return this.http.get<RecentContacts[]>("/assets/data/recent.json");
  
  //}<
   getRecentContacts(): Observable<RecentContacts[]> {
    return this.http.get<Response>("/assets/data/recent.json")
    .pipe(map((data:Response)=> data.data));
    // .pipe(map((data:Response)=>{console.log(JSON.stringify(data.data));return data.data}));
      //.map((res:any) => res.json())
     // .catch((error:any) => console.log(error));

  }
  
}
class Response{
  constructor(public data:RecentContacts[]){}
}

