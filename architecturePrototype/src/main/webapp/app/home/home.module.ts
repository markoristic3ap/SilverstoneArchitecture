import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SilverstoneSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';
import {ReactiveFormsModule} from "@angular/forms";
import {SilverstoneComponentModule} from "../components/component.module";

@NgModule({
    imports: [
        SilverstoneSharedModule,
        SilverstoneComponentModule,
        ReactiveFormsModule,
        RouterModule.forRoot([ HOME_ROUTE ], { useHash: true })
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SilverstoneHomeModule {}

