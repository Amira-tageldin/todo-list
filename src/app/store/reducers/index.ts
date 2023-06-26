import { Params } from '@angular/router';
import * as fromReducer from '@ngrx/router-store' ;
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';


export interface RouterStateUrl{
    url:string;
    queryParam: Params;
    param:Params;
}

export interface state {
    routerReducer: fromReducer.RouterReducerState<RouterStateUrl>
}


export const reducers : ActionReducerMap<state>={

    routerReducer : fromReducer.routerReducer
}

export const getRouterState = createFeatureSelector<fromReducer.RouterReducerState<RouterStateUrl>>('routerReducer')