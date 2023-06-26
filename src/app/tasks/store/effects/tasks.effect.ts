import { Injectable } from "@angular/core";
import {Actions, Effect, createEffect, ofType} from '@ngrx/effects';
import * as fromAcctions from '../actions/data.action';
import {catchError, map, switchMap}  from 'rxjs/operators';
import { TaskStorageService } from "src/app/tasks/task-storage.service";
import { of } from "rxjs";
@Injectable()
export class TaskEffects{
    
    constructor(private actions$:Actions, private storage: TaskStorageService) {
       // super();
        
    }

    @Effect()
    loadTasks$=this.actions$.pipe(ofType(fromAcctions.Load_Task)).pipe(switchMap( () =>{

return this.storage.getTasks().pipe(map(task=> new  fromAcctions.LoadTaskSucceeded(task)), catchError(
    error=> 
   of( new  fromAcctions.LoadTaskFaild(error))) )

    }))

}