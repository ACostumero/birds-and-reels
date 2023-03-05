import { Component } from '@angular/core';
import { CategoriesFacade } from "@app-features/categories/facades/categories.facade";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoriesFacade]
})
export class CategoriesComponent {
  public categories$ = this._categoriesFacade.categories$;

  constructor(private readonly _categoriesFacade: CategoriesFacade) { }

}
