import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Actions, createEffect, ofType } from '@ngrx/effects';


import { tap } from 'rxjs/operators';
import { Back, Forward, Go } from './router.actions';

@Injectable()
export class RouterEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location
    ) {
    }


    navigate$ = createEffect(
        () => this.actions$.pipe(
            ofType(Go),
            tap(async ({ path, query: queryParams, extras }) => {
                await this.router.navigate(path, { queryParams, ...extras });
            })
        ),
        { dispatch: false }
    );


    navigateBack$ = createEffect(
        () => this.actions$.pipe(
            ofType(Back),
            tap(async () => {
                await this.location.back();
            })
        ),
        { dispatch: false }
    );

    navigateForward$ = createEffect(
        () => this.actions$.pipe(
            ofType(Forward),
            tap(async () => {
                await this.location.forward();
            })
        ),
        { dispatch: false }
    );
}
