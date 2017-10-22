import { FormControl } from '@angular/forms';

export class GlobalValidator {

    static mailFormat(control: FormControl): ValidationResult {

        const EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (control.value !== null && control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { 'incorrectMailFormat': true };
        }

        return null;
    }

}

interface ValidationResult {
    [key: string]: boolean;
}
