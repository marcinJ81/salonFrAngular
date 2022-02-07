import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientComponent } from './client/client.component';
import { ServicesComponent } from './services/services.component';
import { ServicesListComponent } from './services/services-list/services-list.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FormsModule } from '@angular/forms';
import { ClientServices } from './service/client.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientComponent,
    ServicesComponent,
    ServicesListComponent,
    EmployeeListComponent,
    EmployeeComponent,
    ReservationListComponent,
    ReservationComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [ClientServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
