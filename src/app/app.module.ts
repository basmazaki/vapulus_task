import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewContactComponent } from './Components/Add New Contact/add-new-contact/add-new-contact.component';
import { ContactListComponent } from './Components/ContactList/contact-list/contact-list.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ContactsFilterPipe } from './Components/ContactList/contacts-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddNewContactComponent,
    ContactListComponent,
    ContactsFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
