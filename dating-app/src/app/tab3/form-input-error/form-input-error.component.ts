import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input-error',
  templateUrl: './form-input-error.component.html',
  styleUrls: ['./form-input-error.component.scss'],
})
export class FormInputErrorComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() formInput: string;

  constructor() { }

  ngOnInit() {}

  get formInputError() {
    if (this.form.controls[this.formInput]) {
        const errors = this.form.controls[this.formInput].errors;
        for (const errorName in errors) {
            if (errors[errorName]) {
                switch (errorName) {
                    case 'required':
                      return null;
                    case 'minlength':
                      return `Must be at least ${this.form.controls[this.formInput].errors.minlength.requiredLength} characters long.`;
                    case 'maxlength':
                      return `Must be maximum ${this.form.controls[this.formInput].errors.maxlength.requiredLength} characters long.`;
                    default:
                      return this.form.controls[this.formInput].errors[errorName];
                }
            }
        }
        return null;
    }
}
}
