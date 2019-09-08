import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewContactComponent } from './Components/Add New Contact/add-new-contact/add-new-contact.component';
import { ContactListComponent } from './Components/ContactList/contact-list/contact-list.component';

const routes: Routes = [
  {path: 'Add', component:AddNewContactComponent},
  {path: 'Default', component:ContactListComponent},
  {path: '', redirectTo: '/Default', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
