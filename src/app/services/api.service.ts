import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiBase : 'http://localhost:5500/'
  constructor() { 
    this.apiBase = 'http://localhost:5500/'
  }
}
