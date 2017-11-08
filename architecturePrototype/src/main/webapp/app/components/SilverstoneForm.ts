
import {AbstractControl, FormGroup} from "@angular/forms";
import {SilverstoneFormControl} from "./SilverstoneFormControl";

export abstract class SilverstoneForm {

    abstract isComplete: boolean;

    silverstoneForm: FormGroup;

    public disableAllControls() {
        Object.keys(this.silverstoneForm.controls).forEach((key, index) => {
            if (this.silverstoneForm.controls.hasOwnProperty(key) && index > 0) {
                this.silverstoneForm.controls[key].disable();
            }
        });
    }


    public buildUpControlChain() {
        let keysArray = Object.keys(this.silverstoneForm.controls);
        keysArray.forEach((key, index) => {
            var predecessorKey = null;
            var successorKey = null;

            if(index > 0) {
                predecessorKey = keysArray[index - 1];
            }

            if(index < keysArray.length-1) {
                successorKey = keysArray[index + 1];
            }

            ( <SilverstoneFormControl> this.silverstoneForm.controls[key]).register(this, predecessorKey, successorKey);
        });


    }



}
