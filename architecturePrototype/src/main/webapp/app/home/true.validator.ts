/** A hero's name can't match the given regular expression */
import {AbstractControl, ValidatorFn} from "@angular/forms";

export function trueValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        console.log("control value: ", control.value);
        if(control.value == true) {
            return null;
        } else {
            return {"lengthValid":false};
        }
    };
}
