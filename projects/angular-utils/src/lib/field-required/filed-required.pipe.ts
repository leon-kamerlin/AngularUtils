import { Pipe, PipeTransform } from '@angular/core';

import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
    name: 'fieldRequired'
})
export class FiledRequiredPipe implements PipeTransform {

    constructor() {
    }

    private static isFieldRequired(control: FormControl): boolean {
        if (control?.validator === null) {
            return false;
        }
        const validator = control?.validator({} as AbstractControl);
        return !!(validator && validator?.required);
    }

    transform(value: FormControl): string {
        return FiledRequiredPipe.isFieldRequired(value) ? '*' : '';
    }

}
