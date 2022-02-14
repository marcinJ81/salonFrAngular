import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientComponent } from './client/client.component';
import { FormsModule } from '@angular/forms';
//services
import { ClientServices } from './service/client.service';
import { CounterServices } from './service/counter.services';
import { EmployeeService } from './service/employee.service';
import { ServicesComponent } from './services/services.component';
//end
//component
import { ReservationComponent } from './reservation/reservation.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { HeaderComponent } from './Header/header.component';
//end

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientComponent,
    ReservationComponent,
    EmployeeComponent,
    ServicesComponent,
    EmployeeListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [
              ClientServices,
              //CounterServices,
              EmployeeService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
