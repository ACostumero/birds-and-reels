import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {API_BASE_URL} from "@app-core/constants/env.const";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private readonly _http: HttpClient) {}

  public get<T>(segment: string): Observable<T> {
    return this._http.get<T>(`${API_BASE_URL}${this._encodeSegment(segment)}`);
  }

  private _encodeSegment(segment: string) {
    return encodeURIComponent(segment);
  }

}
