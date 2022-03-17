import { Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild ,AfterContentInit} from '@angular/core';
import { JobPositionModel } from '../Model/JobPosition.model';
import { CounterServices } from '../service/counter.services';
import { JobPositionService } from '../service/jobPosition.service';

@Component({
  selector: 'app-job-position',
  templateUrl: './job-position.component.html',
  styleUrls: ['./job-position.component.css'],
  providers: [CounterServices]
})
export class JobPositionComponent implements OnInit,  DoCheck {
  @ViewChild('jobNameInput',{static:false}) jobNameInput: ElementRef;
  jobPositionList: JobPositionModel[] = []; 
  jobPositionId: number = 0;

  constructor(
    private jobPositionService: JobPositionService,
    private counter: CounterServices
    ) { }

  ngOnInit(): void {
   
    let jobPositionState: JobPositionModel[] = this.getAllObject();
    console.log("init jobPositionState: " + jobPositionState.length);
    this.jobPositionList = jobPositionState;
    }

  ngDoCheck(): void {
    console.log("docheck");
    this.jobPositionList = this.getAllObject();
  }

  NewJobPosition(): void{
      this.jobPositionId = this.jobPositionService.getLastId();
      if(this.jobPositionId === 0)
        this.counter.incrementId();
      this.counter.setCountNumber(this.jobPositionId);

     // console.log('latest job Positionid =' + this.counter);

      let jobPositionObject = new JobPositionModel(
        this.counter.counter,
        this.jobNameInput.nativeElement.value
      );
      this.jobPositionService.addNewJobPosition(jobPositionObject);
    //  console.log('new job Positionid =' + jobPositionObject.position_id);
      return;
    }

  getAllObject(): JobPositionModel[]{
    if(this.jobPositionList.length == 0)
    {
      console.log("getAllObject: " + 0);
      return [new JobPositionModel(0,"brak")]; 
    }
    console.log("getAllObject: " + this.jobPositionList.length);
    return this.jobPositionList = this.jobPositionService.getAllJobPosition();
  }

}
