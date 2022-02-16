import { Injectable ,EventEmitter} from '@angular/core';
import { ServicesModel } from '../Model/Services.model';
import { ServicesComponent } from '../services/services.component';

enum ServiceListType{
  combo = 1,
  table = 2
}
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private serviceList: ServicesModel[] = []
  newService = new EventEmitter<ServicesModel>();
  constructor() { }

  AddNewService(newService: ServicesModel){

    this.serviceList.push(newService);
  }

  GetServiceList(listType: ServiceListType ) :ServicesModel[]{
    if(this.serviceList.length === 0){
      if(listType === ServiceListType.combo)
        return [new ServicesModel(0,"Wybierz ",0)];
      if(listType === ServiceListType.table)
        return [new ServicesModel(0,"Brak usługi ",0)];
    }
    return this.serviceList;
  }

  getLastId(): number{
    if(this.serviceList.length === 0)
        return 0;
    return this.serviceList[this.serviceList.length-1].serv_id;
}

}
