import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryFacade } from "@app-features/categories/facades/category.facade";
import { CATEGORY } from "@app-core/enums/category.enum";
import { filter, map, Observable, Subject, takeUntil, tap } from "rxjs";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { TCategory } from "@app-core/types/category.type";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements  OnInit, OnDestroy {
  private _destroySubscriptions$: Subject<void> = new Subject<void>();

  public category$: Observable<CATEGORY> = this._categoryFacade.category$;
  public items$: Observable<TCategory[]> = this._categoryFacade.items$;

  constructor(
    private readonly _categoryFacade: CategoryFacade,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      takeUntil(this._destroySubscriptions$),
      map((params: ParamMap) => params.get('name')),
      filter(Boolean),
      tap((category: string) => {
        this._categoryFacade.setCategory(category as CATEGORY)
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this._destroySubscriptions$.next();
    this._categoryFacade.onDestroy();
  }

}
