import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://ketiketelauri123-001-site1.jtempurl.com/api';

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}/items`);
  }

  createItem(item: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/items`, item);
  }
  
  getBookings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/booking/get`);
  }
}
