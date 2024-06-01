import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _httpClient:HttpClient) { }

  getAllMatches(){
    return this._httpClient.get(`${process.env['apiUrl']}/match`)
  }

  getLiveMatches(){
    return this._httpClient.get(`${process.env['apiUrl']}/match/live`)
  }

  getPointTable(){
    return this._httpClient.get(`${process.env['apiUrl']}/match/point-table`)
  }
}
