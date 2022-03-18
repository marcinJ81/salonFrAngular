import { NgModule } from "@angular/core";
import { Routes,RouterModule } from '@angular/router';
//component
import { ReservationComponent } from './reservation/reservation.component';
import { EmployeeComponent } from './employee/employee.component';
import { JobPositionComponent } from './job-position/job-position.component';
import { ServicesComponent } from './services/services.component';
import { ClientComponent } from './client/client.component';
import { EditComponent } from "./employee/employee_edit/edit/edit.component";



const appRoutes: Routes = [
    {path: '', redirectTo: '/employee', pathMatch: 'full'},
    {path: 'employee', component: EmployeeComponent, children: [
      {path: ':id', component: EditComponent}
    ]},
    {path: 'reservation', component: ReservationComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'client', component: ClientComponent},
    {path: 'JobPosition', component: JobPositionComponent}
  ];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]

})
export class AppRoutingModule{

}