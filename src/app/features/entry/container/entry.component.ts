import {Component, OnDestroy, OnInit} from '@angular/core';
import {EntryFacade} from "@app-features/entry/facades/entry.facade";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {filter, map, Subject, takeUntil, tap} from "rxjs";
import {TEntryId} from "@app-core/types/entry.type";

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit, OnDestroy {

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _entryFacade: EntryFacade) {}

  private _destroySubscriptions$: Subject<void> = new Subject<void>();

  public entry$ = this._entryFacade.entry$;

  ngOnInit() {
    this._activatedRoute.paramMap.pipe(
      takeUntil(this._destroySubscriptions$),
      tap(() => this._entryFacade.setEntryId(null)),
      map((params: ParamMap) => params.get('id')),
      filter(Boolean),
      tap((entryId: TEntryId) => {
        this._entryFacade.setEntryId(entryId)
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this._destroySubscriptions$.next();
  }

}
