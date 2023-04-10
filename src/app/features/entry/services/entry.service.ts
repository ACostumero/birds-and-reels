import { Injectable } from '@angular/core';
import { ApiService } from "@app-core/http/api.service";
import {TEntry, TEntryId, TEntryResponse} from "@app-core/types/entry.type";
import {map, Observable} from "rxjs";
import {EntryAdapter} from "@app-core/adapters/entry.adapter";
import {Entry} from "@app-core/interfaces/entry.interface";

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private readonly _apiService: ApiService, private readonly _entryAdapter: EntryAdapter) { }

  public get(entry: TEntryId): Observable<Entry> {
    const segment: string = `entry/${entry}`
    return this._apiService.get<TEntryResponse>(segment).pipe(
      map((response: TEntryResponse) => this._entryAdapter.adapt(response.data)));
  }

  public all() {
    return this._apiService.get('all');
  }

}
