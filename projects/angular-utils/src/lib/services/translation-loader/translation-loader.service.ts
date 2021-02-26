import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Locale {
    lang: string;
    data: any;
}

@Injectable({
    providedIn: 'root'
})
export class TranslationLoaderService {

    constructor(private translateService: TranslateService) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


    loadTranslations(...args: Locale[]) {
        const locales = [...args];

        locales.forEach((locale) => {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            this.translateService.setTranslation(locale.lang, locale.data, true);
        });
    }
}
