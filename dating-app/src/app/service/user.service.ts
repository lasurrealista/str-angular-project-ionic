import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  jsonUrl: string = "http://localhost:3000/users";
  list$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(
    private http: HttpClient,
  ) {
    this.getAll();
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.jsonUrl)}

  get(id: number): Observable<User> {
    id = typeof id === 'string' ? parseInt(id, 10) : id;
    const ev: Observable<User> | undefined = this.http.get<User>(`${this.jsonUrl}/${id}`);
      if (id == 0) {
        return of(new User());
      } else {
        return ev;
      }
    }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.jsonUrl, user);
  }

  update(user: User): Observable<User> {
    return this.http.patch<User>(`${this.jsonUrl}/${user.id}`, user);
  }

  remove(user: User): void {
    this.http.delete<User>(`${this.jsonUrl}/${user.id}`).subscribe(
      () => this.getAll()
    );
  }
}
