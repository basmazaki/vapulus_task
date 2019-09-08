import { Component, OnInit } from '@angular/core';
import { RecentContacts } from '../../ContactList/ViewModel/recent-contacts';
import { ShareServicesService } from '../../ContactList/Services/ShareServices/share-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css']
})
export class AddNewContactComponent implements OnInit {
NewContact:RecentContacts;
public fileToUpload:File=null;
ListOfNewContants:RecentContacts[]=[];
  constructor(private ShareSevices:ShareServicesService,private router:Router) {
    this.NewContact=new RecentContacts();
    
   }

  ngOnInit() {
  }
  ////////////////
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    alert(file.item(0));
    alert(JSON.stringify(file.item(0)));

    //Show image preview
    var reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    reader.onload = (event:any) => {
      this.NewContact.image = event.target.result;
    }}
  ////////////////////////
  


  onSubmit()
  {
    this.NewContact.image=this.fileToUpload;
    console.log(this.NewContact);
    this.ShareSevices.ListOfcontacts.push(this.NewContact);  
    console.log(this.ShareSevices.ListOfcontacts); 
    this.router.navigate(['\Default']);
  }
  // handleFileInput(file: FileList) {
  //   this.fileToUpload = file.item(0);
  //   alert(file.item(0));
  //   alert(JSON.stringify(file.item(0)));

    
  //   }
   
     
    
}
