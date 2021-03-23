import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  @Input() user = new User();

  userForm: FormGroup;

  user$: Observable<User> = this.userService.get(1).pipe( tap( (
    user => {
      this.userForm.controls.name.setValue(user.name);
      this.userForm.controls.gender.setValue(user.gender);
      this.userForm.controls.age.setValue(user.age);
      this.userForm.controls.description.setValue(user.description);
      this.userForm.controls.zip.setValue(user.location.zip);
      this.userForm.controls.city.setValue(user.location.city);
      this.userForm.controls.address.setValue(user.location.address);
      this.userForm.controls.interestFirst.setValue(user.interests[0]);
      this.userForm.controls.interestSecond.setValue(user.interests[1]);
      this.userForm.controls.interestThird.setValue(user.interests[2]);
     }
  )));

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    ) {
    this.userForm = this.formBuilder.group(
      {
        name: [this.user.name, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
        gender: [this.user.gender, [Validators.required, Validators.pattern('^(Female|Male)$')]],
        age: [this.user.age, [Validators.required, Validators.pattern('^(1[89]|[2-9][0-9])$')]],
        description: [this.user.description, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
        zip: [this.user.location.zip, [Validators.required, Validators.minLength(4), Validators.maxLength(7)]],
        city: [this.user.location.city, [Validators.required, Validators.minLength(3)]],
        address: [this.user.location.address, [Validators.required, Validators.minLength(5)]],
        interestFirst: [this.user.interests[0], [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        interestSecond: [this.user.interests[1], [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        interestThird: [this.user.interests[2], [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      }
    );
    this.userForm.patchValue({
      name: this.user.name,
      gender: this.user.gender,
      age: this.user.age,
      description: this.user.description,
    })
  }
  onSubmit(form: FormGroup, user: User): void {
    this.userService.update(user).subscribe(() =>
    this.router.navigate(['/tabs/tab3']));
  }

  ngOnInit() {

  }
}


