import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProdutcs() {
    return this.http.get<any[]>('http://localhost:3002/v1/products')
  }
}
