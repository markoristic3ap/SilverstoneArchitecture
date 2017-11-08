import { NgModule } from '@angular/core';
import {TestComponent} from "./testComponent/test.component";
import {Test2Component} from "./test2Component/test2.component";

@NgModule({
    imports: [
    ],
    exports: [
        TestComponent,
        Test2Component
    ],
    declarations: [
        TestComponent,
        Test2Component
    ],
    providers: [
    ]
})
export class SilverstoneComponentModule {}
