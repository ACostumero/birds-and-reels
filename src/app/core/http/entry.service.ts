import { Injectable } from '@angular/core';
import { ApiService } from "@app-core/http/api.service";
import { TEntry } from "@app-core/types/segment.type";

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private readonly _apiService: ApiService) { }

  get(entry: TEntry) {
    const segment: string = `entry/${entry}`
    return this._apiService.get(segment);
  }

  all() {
    return this._apiService.get('all');
  }

}
