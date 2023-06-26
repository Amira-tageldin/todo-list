
import { ActionReducerMap , createFeatureSelector, createSelector } from "@ngrx/store";
import  * as fromReducer  from "./data.reducer";


export  interface  DataState {

task:fromReducer.TaskState; 

}

export const reducers: ActionReducerMap<DataState>={

    task: fromReducer.reducer


}


export const getDataState=createFeatureSelector<DataState>('task');
export const getTaskState=createSelector(getDataState , (state:DataState) => state.task) ;
export const getTasksentities=createSelector(getTaskState , fromReducer.getTasksentities) ;
export const getTasksLoading=createSelector(getTaskState , fromReducer.getTaskLoading) ;
export const getAllLoaded=createSelector(getTaskState , fromReducer.getTaskLoaded) ;

export const getAllTasks=createSelector(getTasksentities, 
    
 (entites) =>{
    return Object.keys(entites).map(id=> entites[id])
 }   
    
    )



