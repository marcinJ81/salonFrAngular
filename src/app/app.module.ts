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
import { JobPositionComponent } from './job-position/job-position.component';
import { JobPositionService } from './service/jobPosition.service';
import { AppRoutingModule } from './app-routing.module';
import { EditComponent } from './employee/employee_edit/edit/edit.component';
import { EditclientComponent } from './client/editclient/editclient.component';

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
    HeaderComponent,
    JobPositionComponent,
    EditComponent,
    EditclientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
              ClientServices,
              EmployeeService,
              JobPositionService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
