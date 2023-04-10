import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, of, ReplaySubject, startWith, Subject, switchMap, takeUntil } from "rxjs";
import {TEntry, TEntryId} from "@app-core/types/entry.type";
import {EntryService} from "@app-features/entry/services/entry.service";
import {Entry} from "@app-core/interfaces/entry.interface";

@Injectable()
export class EntryFacade {

  private readonly _destroySubscriptions$: Subject<void> = new Subject<void>();

  private readonly _entryIdSource: BehaviorSubject<TEntryId | null> = new BehaviorSubject<TEntryId | null>(null);
  public readonly entryId$: Observable<TEntryId | null> = this._entryIdSource.asObservable();

  public readonly entry$: Observable<Entry>;

  constructor(private readonly _entryService: EntryService) {
    this.entry$ =this.entryId$.pipe(
      takeUntil(this._destroySubscriptions$),
      filter(Boolean),
      switchMap((entry: TEntryId) => this._getEntryDetails(entry))
    )
  }

  private _getEntryDetails(entry: TEntryId): Observable<Entry> {
    return this._entryService.get(entry).pipe(
      takeUntil(this._destroySubscriptions$)
    )
  }

  public setEntryId(value: TEntryId | null) {
    this._entryIdSource.next(value);
  }



}
