import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiBase : string = 'https://idevosm-alc.herokuapp.com/'
  constructor() { 
    this.apiBase = 'https://idevosm-alc.herokuapp.com/'
  }
}
