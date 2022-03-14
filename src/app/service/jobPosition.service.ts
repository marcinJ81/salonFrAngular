import { EventEmitter,Injectable } from '@angular/core';
import { JobPositionModel } from '../Model/JobPosition.model';

@Injectable()
export class JobPositionService{
    public jobRow: JobPositionModel[] = [];
    newJob = new EventEmitter<JobPositionModel>();

    constructor() {}

    addNewJobPosition(jobPosition: JobPositionModel){

        this.jobRow.push(jobPosition);
        console.log('addNewJobPosition ' + jobPosition.position_id);
        this.newJob.emit(jobPosition);
    }

    getAllJobPosition() : JobPositionModel[]{

        if(this.jobRow.length === 0)
        {
            return [new JobPositionModel(0,"brak danych")];
        }
        return this.jobRow;
    }

    getLastId(): number{
        if(this.jobRow.length === 0)
            return 0;
        return this.jobRow[this.jobRow.length-1].position_id;
    }
}