import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JobPositionModel } from '../Model/JobPosition.model';
import { CounterServices } from '../service/counter.services';
import { JobPositionService } from '../service/jobPosition.service';

@Component({
  selector: 'app-job-position',
  templateUrl: './job-position.component.html',
  styleUrls: ['./job-position.component.css']
})
export class JobPositionComponent implements OnInit {
  @ViewChild('jobNameInput',{static:false}) jobNameInput: ElementRef;
  jobPositionList: JobPositionModel[] = []; 
  jobPositionId: number = 0;

  constructor(
    private jobPosition: JobPositionService,
    private counter: CounterServices
    ) { }

  ngOnInit(): void {
      }

  NewJobPosition(): void{
      this.jobPositionId = this.jobPosition.getLastId();
      if(this.jobPositionId === 0)
        this.counter.incrementId();
      this.counter.setCountNumber(this.jobPositionId);

      let jobPositionObject = new JobPositionModel(
        this.counter.counter,
        this.jobNameInput.nativeElement.value
      );
      this.jobPosition.addNewJobPosition(jobPositionObject);
    }

  getAllObject(): JobPositionModel[]{
    return this.jobPositionList = this.jobPosition.getAllJobPosition();
  }

}
