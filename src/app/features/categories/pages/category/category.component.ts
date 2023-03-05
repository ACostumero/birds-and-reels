import { Component } from '@angular/core';
import { CategoryFacade } from "@app-features/categories/facades/category.facade";
import { CATEGORY } from "@app-core/enums/category.enum";
import { map, Observable, of } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { TCategory } from "@app-core/types/category.type";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {

  public category$: Observable<CATEGORY | null> = of(null);
  public categorySource$: Observable<CATEGORY> = this._categoryFacade._categorySource;
  items$: Observable<TCategory[]> = of([]);
  constructor(private readonly _categoryFacade: CategoryFacade,private route: ActivatedRoute) {
    this.items$ = this.route.data.pipe(map(data => {
      return data['items'] as TCategory[]
    }));

    this.category$ = this._categoryFacade.category$;
  }

}
