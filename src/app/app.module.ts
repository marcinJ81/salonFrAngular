import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientComponent } from './client/client.component';
import { FormsModule } from '@angular/forms';
import { ClientServices } from './service/client.service';
import { CounterServices } from './service/counter.services';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientComponent  
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [ClientServices,CounterServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
