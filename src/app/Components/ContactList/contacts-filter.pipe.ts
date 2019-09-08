import { Pipe, PipeTransform } from '@angular/core';
import { RecentContacts } from './ViewModel/recent-contacts';

@Pipe({
  name: 'contactsFilter'
})
export class ContactsFilterPipe implements PipeTransform {
 
      transform(ContactsList:RecentContacts[],ContactsFilter: string):RecentContacts[] {
        if(!ContactsList || !ContactsFilter)
        
        {
            return ContactsList;
        }
        return ContactsList.filter(contact=>contact.firstName.toLowerCase().indexOf(ContactsFilter.toLowerCase())!==-1);
      }
  
  }

