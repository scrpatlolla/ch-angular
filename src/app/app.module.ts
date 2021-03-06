import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgentalertComponent } from './agentalert/agentalert.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SharedComponent } from './shared/shared.component';
import { HelloComponent } from './hello.component';
import { PartiesComponent } from './parties/parties.component';
import { MakeDirectiveDirective } from './make-directive.directive';
import { ContactmeComponent } from './contactme/contactme.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AgentalertComponent,
    ContactsComponent,
    SharedComponent,
    PartiesComponent,
    MakeDirectiveDirective,
    ContactmeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
