import { Component, Input } from '@angular/core';
import { User } from '../model/user';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  userForm: FormGroup;
  @Input() user = new User();

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
        gender: ['', Validators.required],
        age: ['', Validators.required],
        description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
        zip: ['', Validators.required],
        city: ['', [Validators.required, Validators.minLength(3)]],
        address: ['', [Validators.required, Validators.minLength(5)]],
        interestFirst: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        interestSecond: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        interestThird: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      }
    );
  }
}

