import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {

  user: User = new User();
  userList$: Observable<User[]> = this.userService.getAll();

  constructor(http: HttpClient, public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll();
  }

}
