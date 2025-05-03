import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iEvent } from '../interfaces/ievent';
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http:HttpClient) { }

  getEsscoEvents() {
    const url = 'http://localhost:3000/essco-events'
    return this.http.get<iEvent[]>(url)
  }

  getCfesEvents() {
    const url = 'http://localhost:3000/cfes-events'
    return this.http.get<iEvent[]>(url)
  }

  getInternalEvents() {
    const url = 'http://localhost:3000/internal-events'
    return this.http.get<iEvent[]>(url)
  }

}
