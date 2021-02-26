import { InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationLoaderService } from './translation-loader.service';

export const TranslationLoaderServiceConfig = new InjectionToken<any>('TranslationLoaderServiceConfig');

@NgModule({
    declarations: [],
    providers: [TranslationLoaderService],
    imports: [
        CommonModule
    ]
})
export class TranslationLoaderModule {
    constructor(@Optional() @SkipSelf() parentModule?: TranslationLoaderModule) {
        if (parentModule) {
            throw new Error(
                'TranslationLoaderServiceModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(config: any): ModuleWithProviders<any> {
        return {
            ngModule: TranslationLoaderModule,
            providers: [
                { provide: TranslationLoaderServiceConfig, useValue: config }
            ]
        };
    }
}
