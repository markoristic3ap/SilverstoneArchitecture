import { NgModule } from '@angular/core';
import {TestComponent} from "./testComponent/test.component";
import {Test2Component} from "./test2Component/test2.component";
import {DateInutComponent} from "./dateInputComponent/dateInput.component";


@NgModule({
    imports: [
    ],
    exports: [
        TestComponent,
        Test2Component,
        DateInutComponent
    ],
    declarations: [
        TestComponent,
        Test2Component,
        DateInutComponent
    ],
    providers: [
    ]
})
export class SilverstoneComponentModule {}
