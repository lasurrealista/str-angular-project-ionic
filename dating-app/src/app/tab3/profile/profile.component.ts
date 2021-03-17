import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  userForm: FormGroup;
  @Input() user = new User();

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
        gender: ['', [Validators.required, Validators.pattern('^(Female|Male)$')]],
        age: ['', [Validators.required, Validators.pattern('^(1[89]|[2-9][0-9])$')]],
        description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
        zip: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(7)]],
        city: ['', [Validators.required, Validators.minLength(3)]],
        address: ['', [Validators.required, Validators.minLength(5)]],
        interestFirst: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        interestSecond: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        interestThird: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      }
    );
  }

}
