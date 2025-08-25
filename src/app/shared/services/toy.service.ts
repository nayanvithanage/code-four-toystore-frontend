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
}
