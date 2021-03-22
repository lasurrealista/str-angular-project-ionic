import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Connection } from 'src/app/model/connection';
import { User } from 'src/app/model/user';
import { ConnectionService } from 'src/app/service/connection.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss'],
})
export class ConnectionsComponent implements OnInit {

  user: User = new User();
  connection: Connection = new Connection();

  connectionList$: Observable<Connection[]> = this.connectionService.list$;
  userList$: Observable<User[]> = this.userService.getAll();

  @Output() all: boolean = false;

  constructor(http: HttpClient, public userService: UserService, public connectionService: ConnectionService) { }

  ngOnInit() {
    this.connectionService.getAll();
  }

}
