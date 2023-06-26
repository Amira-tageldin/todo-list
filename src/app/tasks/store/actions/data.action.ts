import { Action } from "@ngrx/store";
import { Task } from "src/app/shared/models/task.model";
export const Load_Task='[DATA] loaded'
export const Load_Task_Succeeded='[DATA] loaded Succded'
export const Load_Task_Faild='[DATA] loaded Failed'


export class LoadTask implements Action{
    readonly type = Load_Task;

}


export class LoadTaskSucceeded implements Action{
    readonly type = Load_Task_Succeeded;
    /**
     *
     */
    constructor(public payload:Task[]) {
               
    }

}

export class LoadTaskFaild implements Action{
    readonly type = Load_Task_Faild;
    /**
     *
     */
    constructor(public payload :any) {
        
        
    }

}


export type  dataActions= LoadTask | LoadTaskSucceeded | LoadTaskFaild;