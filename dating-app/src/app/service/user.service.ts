import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  jsonUrl: string = "http://localhost:3000/users";
  list: User[] = [];

  constructor(
    private http: HttpClient,
  ) {
    this.getAll();
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.jsonUrl)}
}
