import {AbstractControl, ValidatorFn} from '@angular/forms';
import * as moment from 'moment';

export function dateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const validationDate = moment().subtract(14, 'days').startOf('day');
        const selectedDate = moment(control.value).startOf('day');
        if(selectedDate >= validationDate) {
            return null;
        } else {
            return {"lengthValid":false};
        }
    };
}
