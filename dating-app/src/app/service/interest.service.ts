import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Interest } from '../model/interest';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  jsonUrl: string = 'http://localhost:3000/interests';
  list$: BehaviorSubject<Interest[]> = new BehaviorSubject<Interest[]>([]);

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll(): void {
    this.http.get<Interest[]>(this.jsonUrl).subscribe(
      interests => this.list$.next(interests)
    );
  }

  get(id: number): Observable<Interest> {
    id = typeof id === 'string' ? parseInt(id, 10) : id;
    const ev: Observable<Interest> | undefined = this.http.get<Interest>(`${this.jsonUrl}/${id}`)
    if (id == 0) {
      return of(new Interest());
    } else {
      return ev;
    }
  }

  create(interest: Interest): Observable<Interest> {
    return this.http.post<Interest>(this.jsonUrl, interest);
  }

  update(interest: Interest): Observable<Interest> {
    return this.http.patch<Interest>(`${this.jsonUrl}/${interest.id}`, interest);
  }

  remove(interest: Interest): void {
    this.http.delete<Interest>(`${this.jsonUrl}/${interest.id}`).subscribe(
      () => this.getAll()
    );
  }
}
