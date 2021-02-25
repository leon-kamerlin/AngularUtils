import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiledRequiredPipe } from './filed-required.pipe';


@NgModule({
    declarations: [FiledRequiredPipe],
    imports: [
        CommonModule
    ],
    exports: [FiledRequiredPipe]
})
export class FieldRequiredModule {
}
