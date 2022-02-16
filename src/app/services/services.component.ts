import { Component, OnInit,ViewChild,ElementRef, NgModule  } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { CounterServices } from '../service/counter.services';
import { ServicesModel } from '../Model/Services.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [CounterServices]
})
export class ServicesComponent implements OnInit {
  @ViewChild('clNameInput',{static:false}) clNameInputRef: ElementRef;
  @ViewChild('clPriceInput',{static:false}) clPriceInput: ElementRef;
  private servId: number;
  constructor(private servieceServ: ServicesService,private counter: CounterServices) { }

  ngOnInit(): void {
  }

  NewService(){
    this.servId = this.servieceServ.getLastId();
    // console.log('latest id =' + this.clId);
     if(this.servId === 0)
       this.counter.incrementId();
     
     this.counter.setCountNumber(this.servId);
     const newName: string = this.clNameInputRef.nativeElement.value;
     const newPrice: number = this.clPriceInput.nativeElement.value;
     console.log('price =' + newPrice);
     this.servieceServ.AddNewService(new ServicesModel(this.counter.counter,newName,newPrice));
  }

}
