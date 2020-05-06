import { Directive, Input, forwardRef } from '@angular/core';
import { Validator, NG_VALIDATORS, FormGroup, AbstractControl } from '@angular/forms';
import { confirmPassword } from './confirmPassword.validator';

@Directive({
  selector: '[appConfirmEqualValidator][formControlName]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ConfirmEqualValidatorDirective),
    multi: true
  }]
})

export class ConfirmEqualValidatorDirective implements Validator {
  @Input() appConfirmEqualValidator: string;

  validate(control: FormGroup): { [key: string]: any } | null {
    return confirmPassword(control);
  }
}
