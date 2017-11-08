/** A hero's name can't match the given regular expression */
import {AbstractControl, ValidatorFn} from "@angular/forms";

export function namelengthValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        if(control.value.length > 4) {
            return null;
        } else {
            return {"lengthValid":false};
        }
    };
}
