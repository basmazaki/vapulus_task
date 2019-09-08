import { Injectable } from '@angular/core';
import { RecentContacts } from '../../ViewModel/recent-contacts';

@Injectable({
  providedIn: 'root'
})
export class ShareServicesService {
ListOfcontacts:RecentContacts[]=[];
  constructor() { 

  }
}
