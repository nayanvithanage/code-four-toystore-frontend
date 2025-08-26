import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Toy } from '../models/toy.model';

@Injectable({
  providedIn: 'root'
})
export class ToyService {
  private apiUrl = 'http://localhost:5006/api/toy';

  constructor(private http: HttpClient) {}

  getToys(): Observable<Toy[]> {
    return this.http.get<Toy[]>(this.apiUrl);
  }

  addToy(toy: Omit<Toy, 'id'>): Observable<Toy> {
    return this.http.post<Toy>(this.apiUrl, toy);
  }

  updateToy(toy: Toy): Observable<Toy> {
    return this.http.put<Toy>(`${this.apiUrl}/${toy.id}`, toy);
  }

  deleteToy(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
