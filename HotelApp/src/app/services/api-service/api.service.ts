import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://ketiketelauri123-001-site1.jtempurl.com/api';

  constructor(private http: HttpClient) { }

  // GET method with optional parameter
  getItem(endpoint: string, id?: number): Observable<any> {
    const url = id ? `${this.apiUrl}/${endpoint}/${id}` : `${this.apiUrl}/${endpoint}`;
    return this.http.get(url);
  }

  // POST method
  createItem(endpoint: string, item: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, item);
  }

  // PUT method
  updateItem(endpoint: string, item: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${endpoint}`, item);
  }

  // DELETE method
  deleteItem(endpoint: string, itemId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${endpoint}/${itemId}`);
  }
}
