import { Task } from "src/app/shared/models/task.model"
import * as fromActions from '../actions/data.action'

 export  interface TaskState {
    data:Task[] ,
    loading:Boolean ,
    loaded :Boolean
}

export const intialState : TaskState={
    data:[] ,
    loading:false ,
    loaded:false

}
export function reducer (state=intialState , action:fromActions.dataActions) : TaskState{


    switch (action.type) {
        case fromActions.Load_Task:{
            return {
                ...state ,loading:true
            }  ;
        }
        
        case fromActions.Load_Task_Succeeded:{

            const data  = action.payload;
            console.log(action.payload)
            return {
                ...state ,loaded:true,loading:false , data
            }



           }

           case fromActions.Load_Task_Faild:{
            return {
                ...state ,loaded:false , loading:false
            }



           }
       

        }
    return state;
}


export const getTaskLoading =(state:TaskState) => state.loading ;
export const getTaskLoaded =(state:TaskState) => state.loaded ;
export const getAllTasks =(state:TaskState) => state.data ;