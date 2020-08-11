import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url = 'http://localhost:3002/v1'

  constructor(private http: HttpClient) { }

  public composeHeaders() {
    const token = localStorage.getItem('petshop.token');
    const headders = new HttpHeaders().set('Authorization', `bearer ${token}`);
    return headders;
  }

  getProdutcs() {
    return this.http.get<Product[]>(`${this.url}/products`);
  }

  authenticate(data) {
    return this.http.post(`${this.url}/accounts/authenticate`, data);
  }

  refreshToken() {
    return this.http.post(`${this.url}/accounts/refresh-token`,
      null,
      { headers: this.composeHeaders() }
    );
  }
}
