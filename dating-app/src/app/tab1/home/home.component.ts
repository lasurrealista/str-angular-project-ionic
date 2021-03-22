import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  user: User = new User();
  userList$: Observable<User[]> = this.userService.getAll();
  @Output() all: boolean = false;

  constructor(http: HttpClient, public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll();
  }
  phrase: string = '';

  searchEvent(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}
