import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployesApiService {
  readonly EmployeAPIUrl = 'https://localhost:7098/api';

  constructor(private http: HttpClient) { }
  getEmployesList(): Observable<any[]> {
    return this.http.get<any>(this.EmployeAPIUrl + '/employes');

  }


}
