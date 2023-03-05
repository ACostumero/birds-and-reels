import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private static readonly API_BASE_URL = 'https://botw-compendium.herokuapp.com/api/v2/';

  constructor(private readonly _http: HttpClient) {}

  public get<T>(segment: string): Observable<T> {
    return this._http.get<T>(`${ApiService.API_BASE_URL}${this._encodeSegment(segment)}`);
  }

  private _encodeSegment(segment: string) {
    return encodeURIComponent(segment);
  }

}
