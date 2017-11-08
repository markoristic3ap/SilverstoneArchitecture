import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidatorFn} from "@angular/forms";
import {SilverstoneForm} from "./SilverstoneForm";

export class SilverstoneFormControl extends FormControl {

    private _form: SilverstoneForm;
    private _predecessor: AbstractControl;
    private _successor: AbstractControl;

    constructor(formState?: any, validator?: ValidatorFn | ValidatorFn[] | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
        super(formState, validator, asyncValidator);

        this.statusChanges.subscribe( status => {

            try {
                if(this._form) {
                    if(status === "VALID") {
                        this._form.isComplete = true;
                    } else {
                        this._form.isComplete = false;
                    }
                }
            } catch( err) {
                console.error("Error", err);
            }
        });
    }

    public register( form: SilverstoneForm, predecessorName: string, successorName: string) {
        this._form = form;

        if(predecessorName!=null) {
            this.Predecessor = form.silverstoneForm.controls[predecessorName];
        }

        if(successorName!=null) {
            this.Successor = form.silverstoneForm.controls[successorName];
        }
    }


    private set Predecessor( predecessor: AbstractControl ) {

        if(predecessor == null) {
            return;
        }

        this._predecessor = predecessor;

        predecessor.statusChanges.subscribe(
            status => {

                try {
                    if (status === "VALID") {
                        this.enable();
                    } else {
                        this.disable();
                    }
                } catch (err) {
                    console.error("Error on StatusChange", err);
                }
            }
        );

    }

    private set Successor( successor: AbstractControl ) {
        this._successor = successor;
    }




}
