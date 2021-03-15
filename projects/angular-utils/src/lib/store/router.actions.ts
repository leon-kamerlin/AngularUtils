import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';


export enum RouterActionTypes {
    GO = '[Router] Go',
    BACK = '[Router] Back',
    FORWARD = '[Router] Forward',
}


export const Go = createAction(
    RouterActionTypes.GO,
    props<{ path: any[]; query?: object; extras?: NavigationExtras }>()
);


export const Back = createAction(RouterActionTypes.BACK);
export const Forward = createAction(RouterActionTypes.FORWARD);


