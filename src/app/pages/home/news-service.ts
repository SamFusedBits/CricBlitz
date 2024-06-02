import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // Update the URL to point to your backend service
  private apiUrl = 'https://cricblitzbackend-production.up.railway.app/match/home'; // Update the URL accordingly

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
