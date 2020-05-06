import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

export function confirmPassword(control: FormGroup): ValidationErrors | null {
    const cpassword = control.get('cpassword');
    const password = control.get('password');
    if ( password.value !== cpassword.value) {
      return { 'notEqual': true };
    }
    else {
      return null;
    }

  }