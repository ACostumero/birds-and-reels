import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from "@app-features/categories/container/categories.component";
import { CategoriesRoutingModule } from "@app-features/categories/categories-routing.module";
import { CategoryComponent } from './pages/category/category.component';
import { CardMiniComponent } from "@app-shared/components/ui/card-mini/card-mini.component";
import { SharedModule } from "@app-shared/modules/shared.module";
import { CategoriesFacade } from "@app-features/categories/facades/categories.facade";
import { CategoryFacade } from "@app-features/categories/facades/category.facade";



@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    CardMiniComponent,
    SharedModule,
  ],
  providers: [
    CategoriesFacade,
    CategoryFacade,
  ]
})
export class CategoriesModule { }
