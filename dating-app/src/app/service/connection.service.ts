import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Connection } from '../model/connection';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  jsonUrl: string = 'http://localhost:3000/connections';
  list$: BehaviorSubject<Connection[]> = new BehaviorSubject<Connection[]>([]);

  perfectMatches: Connection[] = [];

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll(): void {
    this.http.get<Connection[]>(this.jsonUrl).subscribe(
      connections => this.list$.next(connections)
    );
  }

  get(id: number): Observable<Connection> {
    id = typeof id === 'string' ? parseInt(id, 10) : id;
    const ev: Observable<Connection> | undefined = this.http.get<Connection>(`${this.jsonUrl}/${id}`);
    if (id == 0) {
      return of(new Connection());
    } else {
      return ev;
    }
  }

  create(connection: Connection): Observable<Connection> {
    return this.http.post<Connection>(this.jsonUrl, connection);
  }

  update(connection: Connection): Observable<Connection> {
    return this.http.patch<Connection>(`${this.jsonUrl}/${connection.id}`, connection);
  }

  remove(connection: Connection): void {
    this.http.delete<Connection>(`${this.jsonUrl}/${connection.id}`).subscribe(
      () => this.getAll()
    );
  }
}
