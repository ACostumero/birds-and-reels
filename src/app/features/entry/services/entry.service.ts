import { Injectable } from '@angular/core';
import { ApiService } from "@app-core/http/api.service";
import {TEntry, TEntryId, TEntryResponse} from "@app-core/types/entry.type";
import {delay, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private readonly _apiService: ApiService) { }

  public get(entry: TEntryId): Observable<TEntry> {
    const segment: string = `entry/${entry}`
    return this._apiService.get<TEntryResponse>(segment).pipe(
      map((response: TEntryResponse) => response.data));
  }

  public all() {
    return this._apiService.get('all');
  }

}
