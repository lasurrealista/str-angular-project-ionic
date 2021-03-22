import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {

  @Input() user: User = new User();
  @Input() all: boolean = true;

  constructor(http: HttpClient, public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll();
  }
  phrase: string = '';

  searchEvent(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  toLike(liked: boolean, user: User) {
    user.liked = liked;
    this.userService.update(user).subscribe(
      () => this.userService.getAll()
      )
  }

  toDislike(liked: boolean, user: User) {
    user.liked = liked;
    this.userService.update(user).subscribe(
    () => this.userService.getAll()
  )
}
}
