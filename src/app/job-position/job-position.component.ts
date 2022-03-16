import { Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild ,AfterContentInit} from '@angular/core';
import { JobPositionModel } from '../Model/JobPosition.model';
import { CounterServices } from '../service/counter.services';
import { JobPositionService } from '../service/jobPosition.service';

@Component({
  selector: 'app-job-position',
  templateUrl: './job-position.component.html',
  styleUrls: ['./job-position.component.css'],
  providers: [JobPositionService]
})
export class JobPositionComponent implements OnInit, OnChanges, DoCheck,AfterContentInit {
  @ViewChild('jobNameInput',{static:false}) jobNameInput: ElementRef;
  jobPositionList: JobPositionModel[] = []; 
  jobPositionId: number = 0;

  constructor(
    private jobPosition: JobPositionService,
    private counter: CounterServices
    ) { }

  ngOnInit(): void {
      this.jobPositionList = this.getAllObject();
      }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log("onchanges");
    /*this.jobPositionList = this.getAllObject();*/
  }
  ngDoCheck(): void {
    
    console.log("docheck");
    this.jobPositionList = this.getAllObject();
  }

  ngAfterContentInit(){
    console.log("ngContentAfterInit");
    console.log("one");
  }


  NewJobPosition(): void{
      this.jobPositionId = this.jobPosition.getLastId();
      if(this.jobPositionId === 0)
        this.counter.incrementId();
      this.counter.setCountNumber(this.jobPositionId);

      console.log('latest job Positionid =' + this.counter);

      let jobPositionObject = new JobPositionModel(
        this.counter.counter,
        this.jobNameInput.nativeElement.value
      );
      this.jobPosition.addNewJobPosition(jobPositionObject);
      console.log('new job Positionid =' + jobPositionObject.position_id);
      return;
    }

  getAllObject(): JobPositionModel[]{
    if(this.jobPositionList.length == 0)
    {
      return [new JobPositionModel(0,"brak")]; 
    }
    return this.jobPositionList = this.jobPosition.getAllJobPosition();
  }

}
