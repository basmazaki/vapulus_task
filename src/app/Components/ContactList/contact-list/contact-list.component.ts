import { Component, OnInit } from '@angular/core';
import { RecentContactsService } from '../Services/recent-contacts.service';
import { RecentContacts } from '../ViewModel/recent-contacts';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShareServicesService } from '../Services/ShareServices/share-services.service';
import { ContantServicesService } from '../Services/ContantServices/contant-services.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
RecentList:RecentContacts[]=[];
ShareServicesList:RecentContacts[]=[];
ContactsList:RecentContacts[]=[];
SearchContacts:string;
  constructor(private services:RecentContactsService,private ShareServices:ShareServicesService,private contactServices:ContantServicesService) { }

  ngOnInit() { 
    this.services.getRecentContacts().subscribe(
   (data)=>{this.RecentList=data;
   console.log(JSON.stringify(this.RecentList));
  });

  this.ShareServicesList=this.ShareServices.ListOfcontacts;

  
  this.contactServices.getContacts().subscribe(
    (data)=>{this.ContactsList=data;
    console.log(JSON.stringify(this.ContactsList));
   });
  }

}
