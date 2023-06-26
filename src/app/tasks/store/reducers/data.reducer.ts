import { Task } from "src/app/shared/models/task.model"
import * as fromActions from '../actions/data.action'

 export  interface TaskState {
    entities:{[id:number] :  Task }
   // data:Task[] ,
    loading:Boolean ,
    loaded :Boolean
}

export const intialState : TaskState={
    entities:{} ,
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

const entities=data.reduce((entities , task) =>{
    return {
        ...entities , [task.id]:task
    };

} ,
{...state.entities}

);



            console.log(action.payload)
            return {
                ...state ,loaded:true,loading:false , entities
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
export const getTasksentities =(state:TaskState) => state.entities ;