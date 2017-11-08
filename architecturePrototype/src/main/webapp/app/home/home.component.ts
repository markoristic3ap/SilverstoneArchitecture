import {Component, OnInit} from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {JhiEventManager} from 'ng-jhipster';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

import {Account, LoginModalService, Principal} from '../shared';

import {SilverstoneForm} from "../components/SilverstoneForm";
import {SilverstoneFormControl} from "../components/SilverstoneFormControl";
import {trueValidator} from "./true.validator";
import {namelengthValidator} from "./string.length.validator";


@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.scss'
    ]
})
export class HomeComponent extends SilverstoneForm implements OnInit {

    isComplete: boolean;
    account: Account;
    modalRef: NgbModalRef;


    constructor(private principal: Principal,
                private loginModalService: LoginModalService,
                private eventManager: JhiEventManager,
                private _fb: FormBuilder) {
        super();
    }


    ngOnInit() {
        // this.principal.identity().then((account) => {
        //     this.account = account;
        // });
        // this.registerAuthenticationSuccess();


        this.silverstoneForm = this._fb.group(
            {
                "test1": new SilverstoneFormControl("", [namelengthValidator()]),
                "test2": new SilverstoneFormControl("", [trueValidator()]),
                "test3": new SilverstoneFormControl("", [namelengthValidator()]),
                "test4": new SilverstoneFormControl("", [namelengthValidator()]),
                "test5": new SilverstoneFormControl("", [namelengthValidator()]),
                "test6": new SilverstoneFormControl("", [namelengthValidator()]),
                "test7": new SilverstoneFormControl("", [namelengthValidator()]),
                "test8": new SilverstoneFormControl("", [namelengthValidator()]),
                "test9": new SilverstoneFormControl("", [namelengthValidator()]),
                "test10": new SilverstoneFormControl("", [namelengthValidator()]),
                "test11": new SilverstoneFormControl("", [namelengthValidator()]),
                "test12": new SilverstoneFormControl("", [namelengthValidator()]),
                "test13": new SilverstoneFormControl("", [namelengthValidator()]),
                "test14": new SilverstoneFormControl("", [namelengthValidator()]),
                "test15": new SilverstoneFormControl("", [namelengthValidator()]),
                "test16": new SilverstoneFormControl("", [namelengthValidator()]),
                "test17": new SilverstoneFormControl("", [namelengthValidator()]),
            }
        );



        this.disableAllControls();
        this.buildUpControlChain();


        this.silverstoneForm.controls.test1.valueChanges.subscribe( data => {
            console.log("Data", data);
        });

        this.silverstoneForm.controls.test2.valueChanges.do((data) => {
        }).subscribe();

        this.silverstoneForm.controls.test3.valueChanges.do((data) => {
        }).subscribe();

        this.silverstoneForm.controls.test4.valueChanges.do((data) => {
        }).subscribe();

        this.silverstoneForm.controls.test5.valueChanges.do((data) => {
        }).subscribe();

        this.silverstoneForm.controls.test6.valueChanges.do((data) => {
        }).subscribe();

        this.silverstoneForm.controls.test7.valueChanges.do((data) => {
        }).subscribe();
    }




    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }


    isAuthenticated() {
        return this.principal.isAuthenticated();
    }


    login() {
        this.modalRef = this.loginModalService.open();
    }


}
