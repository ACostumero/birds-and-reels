import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryFacade } from "@app-features/categories/facades/category.facade";
import { CATEGORY } from "@app-core/enums/category.enum";
import { filter, map, Observable, of, Subject, takeUntil, tap } from "rxjs";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { TCategory } from "@app-core/types/category.type";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  public category$: Observable<CATEGORY | null> = of(null);
  public items$: Observable<TCategory[]>;
  private _destroySubscriptions$: Subject<void> = new Subject<void>();
  constructor(
    private readonly _categoryFacade: CategoryFacade,
    private route: ActivatedRoute
  ) {
    this.category$ = this._categoryFacade.category$;
    this.items$ = this._categoryFacade.items$;
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      takeUntil(this._destroySubscriptions$),
      map((params: ParamMap) => params.get('name')),
      filter(Boolean),
      tap((category) => {
        this._categoryFacade.setCategory(category as CATEGORY)
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this._destroySubscriptions$.next();
  }

}
